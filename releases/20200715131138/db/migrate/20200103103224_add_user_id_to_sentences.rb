class AddUserIdToSentences < ActiveRecord::Migration[6.0]
  def change
    add_column :sentences, :user_id, :integer
  end
end
