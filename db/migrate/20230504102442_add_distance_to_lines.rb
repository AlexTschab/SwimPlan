class AddDistanceToLines < ActiveRecord::Migration[7.0]
  def change
    add_column :lines, :distance, :integer
  end
end
