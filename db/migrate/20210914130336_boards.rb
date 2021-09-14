class Boards < ActiveRecord::Migration[6.0]
  def change
    add_column :boards, :user_id, :integer
    add_column :boards, :name, :string
    remove_column :boards, :users_id

    remove_column :sentences, :color
    add_column :sentences, :color, :string
  end
end
