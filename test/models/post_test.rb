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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
