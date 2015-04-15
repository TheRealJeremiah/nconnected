# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :subscriptions
  has_many :feeds, through: :subscriptions
  has_many :posts, through: :feeds

  has_many :favorites
  has_many :favorite_posts, through: :favorites, source: :post

  def self.find_by_credentials(params)
    user = User.find_by_email(params[:email])
    return nil if user.nil?
    return user if user.is_password?(params[:password])
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def subscription_id(feed)
    subscriptions.each do |sub|
      return sub.id if sub.feed_id == feed.id
    end
    false
  end

  def favorite_id(post)
    favorites.each do |fav|
      return fav.id if fav.post_id == post.id
    end
    false
  end

  def all_feed_posts
    feed_urls = feeds.map(&:url)
    #we do all the fetching at once to take advantage of feedjira async
    feed_parsed = Feedjira::Feed.fetch_and_parse(feed_urls)
    feeds.each do |feed|
      feed.update_posts(feed_parsed[feed.url].entries)
    end
    self.posts.order('published DESC')
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
