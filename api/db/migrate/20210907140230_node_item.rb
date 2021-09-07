class NodeItem < ActiveRecord::Migration[6.0]
  def change
    create_table :NodeItems do |t|
      t.string :name, null: false
      t.string :description,null: false
      t.integer :next_id,null: false
      t.integer :roadmap_id,null: false
    end
  end
end
