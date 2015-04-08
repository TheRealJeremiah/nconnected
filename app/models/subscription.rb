# == Schema Information
#
# Table name: subscriptions
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  feed_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ActiveRecord::Base
  validates :feed_id, :user_id, presence: true

  belongs_to :user
  belongs_to :feed
end
