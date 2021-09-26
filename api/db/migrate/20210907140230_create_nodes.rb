class CreateNodes < ActiveRecord::Migration[6.0]
  def change
    create_table :nodes do |t|
      t.string :name, null: false
      t.string :description,null: false
      t.integer :next_id
      t.integer :roadmap_id,null: false
    end
  end
end
