class Training < ApplicationRecord
  has_many :blocs
  has_many :lines, through: :blocs
end
