require 'sequel'
require 'json'

# Sqlite Memory Database
DB = Sequel.sqlite('projects.db')

# create an items table
DB.create_table :projects do
  primary_key :id
  String :name
  String :photo_url
  String :thumbnail_url
  Number :width
  Number :height
  Number :likes
  String :movie_url
  Boolean :published
  Boolean :flagged
  Date :created_at
end unless DB.table_exists?(:projects)

# 1. read the file
json = JSON.parse(File.read('content.json'))

json['feed'].each do |content|
  data = {
    photo_url: content['path_prefix'] + content['media_key'] + 'anchor.jpg',
    thumbnail_url: content['path_prefix'] + content['media_key'] + 'small_square_anchor.jpg',
    width: content['size_x'],
    height: content['size_y'],
    likes: content['likes'],
    movie_url: content['path_prefix'] + content['media_key'] + 'movie.mp4',
    created_at: content['create_e']
    # not Date.today, right?
  }
  DB[:projects].insert(data)
end