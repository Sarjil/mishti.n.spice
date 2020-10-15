class CreateCupcakes < ActiveRecord::Migration[5.2]
  def change
    create_table :cupcakes do |t|
      t.string :name, null: false
      t.text :description, null:false
      t.decimal :price, precision: 10, scale: 2
      t.timestamps
    end

    add_index(:cupcakes, [:name], unique: true)
  end
end
