# == Schema Information
#
# Table name: feeds
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  url         :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Feed < ActiveRecord::Base
  validates :title, :url, presence: true
end
