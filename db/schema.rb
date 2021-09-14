# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_14_133448) do

  create_table "boards", force: :cascade do |t|
    t.integer "columns"
    t.integer "rows"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.string "name"
  end

  create_table "sentences", force: :cascade do |t|
    t.string "name"
    t.text "sentence"
    t.string "group"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.integer "board_id"
    t.string "color"
  end

# Could not dump table "users" because of following StandardError
#   Unknown type 'uuid' for column 'uuid'

end
