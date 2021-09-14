class SentencesBelongtoBoards < ActiveRecord::Migration[6.0]
  def change
    add_column :sentences, :board_id, :integer
  end
end
