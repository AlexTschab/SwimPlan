class Bloc < ApplicationRecord
  belongs_to :training
  has_many :lines, dependent: :destroy, inverse_of: :bloc
  accepts_nested_attributes_for :lines, allow_destroy: true, reject_if: :all_blank
end
