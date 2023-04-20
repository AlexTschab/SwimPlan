class CreateBlocs < ActiveRecord::Migration[7.0]
  def change
    create_table :blocs do |t|
      t.string :quantity
      t.references :training, null: false, foreign_key: true

      t.timestamps
    end
  end
end
