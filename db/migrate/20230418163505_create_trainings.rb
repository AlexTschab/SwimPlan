class CreateTrainings < ActiveRecord::Migration[7.0]
  def change
    create_table :trainings do |t|
      t.string :title
      t.date :date
      t.string :content

      t.timestamps
    end
  end
end
