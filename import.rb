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
    name: content['name'],
    photo_url: content['photo_url'],
    created_at: Date.today
  }
  DB[:projects].insert(data)
end