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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
