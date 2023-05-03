class Line < ApplicationRecord
  belongs_to :bloc
  validates_uniqueness_of :quantity, scope: :meters
end
