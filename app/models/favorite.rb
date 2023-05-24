class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :training
  validates :user, uniqueness: { scope: :training}
end
