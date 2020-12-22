class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.integer :columns
      t.integer :rows
      t.belongs_to :users, null: false, foreign_key: true
      #t.sentences :has_many

      t.timestamps
    end
  end
end
