# == Schema Information
#
# Table name: feeds
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  url              :string           not null
#  description      :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  latest_post_date :datetime
#

class Feed < ActiveRecord::Base
  validates :title, :url, presence: true
  has_many :posts
  has_many :subscriptions

  def update_posts(post_array)
    # get rid of n+1 query
    post_array.each do |post|
      if self.latest_post_date.nil? || post.published > self.latest_post_date
        Post.create({ feed_id: self.id,
                      url: post.url,
                      summary: post.summary,
                      published: post.published,
                      title: post.title,
                      json: post.to_json.to_s })
      end
    end
    self.update({latest_post_date: Time.now})
  end

  def fetch_entries
    Feedjira::Feed.fetch_and_parse(url).entries[0..9]
  end
end
