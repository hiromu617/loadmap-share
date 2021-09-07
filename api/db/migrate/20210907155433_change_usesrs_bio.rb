class ChangeUsesrsBio < ActiveRecord::Migration[6.0]
  def change
    change_column_null :users, :bio, false
  end
end
