class Roadmap < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :nodes
  has_many :categories
end
