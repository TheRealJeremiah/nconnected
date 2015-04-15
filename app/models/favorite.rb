# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ActiveRecord::Base
  validates :post_id, :user_id, presence: true
  validates :post_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :post
end
