class DropProfileImage < ActiveRecord::Migration[6.0]
  def up
    remove_column :users, :profile_image
  end
  def down
    add_column :users, :profile_image
  end
end
