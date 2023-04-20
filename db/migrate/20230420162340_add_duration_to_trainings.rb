class AddDurationToTrainings < ActiveRecord::Migration[7.0]
  def change
    add_column :trainings, :duration, :string
  end
end
