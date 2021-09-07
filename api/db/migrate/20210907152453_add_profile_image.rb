class AddProfileImage < ActiveRecord::Migration[6.0]
  def up
    add_column :users, :profile_image, :string
  end
end
