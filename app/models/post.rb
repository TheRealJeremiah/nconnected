# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  feed_id    :integer          not null
#  title      :string           not null
#  json       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  url        :string
#  summary    :text
#  published  :datetime
#

class Post < ActiveRecord::Base
  validates :feed_id, :title, :json, presence: true
  belongs_to :feed

  def full_post
    json
  end
end
