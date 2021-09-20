class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :roadmap_id,null: false
      t.integer :user_id,null: false
      t.string :comment ,null: false
    end
  end
end
