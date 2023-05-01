class Bloc < ApplicationRecord
  belongs_to :training
  has_many :lines
  accepts_nested_attributes_for :lines, allow_destroy: true
end
