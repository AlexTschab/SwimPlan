class AddExerciseToLines < ActiveRecord::Migration[7.0]
  def change
    add_column :lines, :exercise, :string
  end
end
