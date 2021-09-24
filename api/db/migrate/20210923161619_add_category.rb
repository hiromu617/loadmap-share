class AddCategory < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :name,null: false
    end
  end
end
