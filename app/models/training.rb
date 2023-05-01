class Training < ApplicationRecord
  has_many :blocs, dependent: :destroy, inverse_of: :training
  accepts_nested_attributes_for :blocs, reject_if: :all_blank, allow_destroy: true
end
