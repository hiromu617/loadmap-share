class Roadmap < ApplicationRecord
  belongs_to :user
  has_many :nodes
  has_many :categories
end
