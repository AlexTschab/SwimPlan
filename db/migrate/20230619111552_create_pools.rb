class CreatePools < ActiveRecord::Migration[7.0]
  def change
    create_table :pools do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.string :size
      t.string :address

      t.timestamps
    end
  end
end
