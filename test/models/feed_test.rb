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

require 'test_helper'

class FeedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
