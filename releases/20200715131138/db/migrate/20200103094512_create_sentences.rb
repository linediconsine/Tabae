class CreateSentences < ActiveRecord::Migration[6.0]
  def change
    create_table :sentences do |t|
      t.string :name
      t.text :sentence
      t.integer :color
      t.string :group

      t.timestamps
    end
  end
end
