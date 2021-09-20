class CreateRoadmaps < ActiveRecord::Migration[6.0]
  def change
    create_table :roadmaps do |t|
      t.string :name,null: false
      t.string :description,null: false
      t.integer :user_id,null: false
    end
  end
end
