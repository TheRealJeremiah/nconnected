# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  feed_id    :integer          not null
#  post_date  :date             not null
#  title      :string           not null
#  json       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  validates :feed_id, :post_date, :title, :json, presence: true
  belongs_to :feed

  def full_post
    json
  end
end
