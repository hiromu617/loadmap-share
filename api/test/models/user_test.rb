# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  uid           :string(255)      not null
#  name          :string(255)      not null
#  profile_image :string(255)
#  bio           :string(255)      default(""), not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
