class Likes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :roadmap_id,null: false
      t.integer :user_id,null: false
    end
  end
end
