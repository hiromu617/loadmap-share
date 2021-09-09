class User < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :uid, null: false, unique: true
      t.string :name, null: false
      t.string :bio, null: false
      t.string :profile_image,default: ''
    end
  end
end
