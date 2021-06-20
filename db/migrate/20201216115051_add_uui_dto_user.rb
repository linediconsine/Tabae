class AddUuiDtoUser < ActiveRecord::Migration[6.0]
  def change

    add_column :users, :uuid, :uuid, default: ""

  end
end
