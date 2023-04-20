class CreateLines < ActiveRecord::Migration[7.0]
  def change
    create_table :lines do |t|
      t.string :quantity
      t.string :meters
      t.string :start_time
      t.references :bloc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
