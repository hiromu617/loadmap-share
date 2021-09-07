class AddBio < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :bio, :string, default: ''
  end
end
