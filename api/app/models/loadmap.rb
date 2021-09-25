class Loadmap < ApplicationRecord
  belongs_to :user
  has_many :nodeItems
  has_many :categories
end
