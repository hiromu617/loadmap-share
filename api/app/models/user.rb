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
class User < ApplicationRecord
  validates :uid, presence: true, length: { maximum: 20 }
  validates :name, presence: true, length: { maximum: 20 }
  validates :profile_image, length: { maximum: 255 }
  validates :bio, length: { maximum: 255 }
  has_many :roadmaps
  has_many :comments
end
