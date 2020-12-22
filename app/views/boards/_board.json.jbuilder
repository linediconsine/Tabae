json.extract! board, :id, :columns, :rows, :User_id, :has_many, :created_at, :updated_at
json.url board_url(board, format: :json)
