class Bloc < ApplicationRecord
  belongs_to :training
  has_many :lines
end
