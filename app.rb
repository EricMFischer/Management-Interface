require 'sinatra'
require 'rack/post-body-to-params'
require 'sequel'
require 'active_support'
require 'json'
# To build a JSON API without Rails, I needed Rack to parse the
# body of JSON POST/PUT requests into a params hash.
# Rack provides an interface between Ruby web frameworks like
# Sinatra and the actual webserver like WEBrick or Thin.

# ActiveSupport provides Ruby language extensions and utilities.
# It's a wrapper for JSON obj and provides JSON def. for Ruby objs
# ActiveSupport::JSON.backend = 'Yajl'

# Sqlite (embedded into app, USB sharing, cross-platform, typeless with 
# data, and can be used to cache relevant content from enterprise RDBMS)
# Severless! read/write directly to disk, no IP communication
DB = Sequel.sqlite('projects.db')

# :symbols are immutable identifiers. bc they are never changed,
# they are instantiated and are compared faster than strings
# ruby uses same object everytime you reference the symbol, saving
# memory. this prevents it from being instantiated repeatedly

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

# builds params hash from HTTP request
# The params come from the user's browser when they request the page. 
# For an HTTP GET request, the params are encoded in the url. 
use Rack::PostBodyToParams

# where static files should be served from --> './public'
set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  File.read(File.join('public', 'index.html'))
end

# begin-rescue is like try-catch block
# logger.info provides general info to terminal
# .inspect converts to string
get '/projects' do
  begin
    results = DB[:projects].all
    logger.info results.inspect
    results.to_json
  rescue
    "[]"
  end
end

# last line before 'end' acts as return statement
post '/projects' do
  data = { 
    name: params[:name], 
    photo_url: params[:photo_url], 
    thumbnail_url: params[:thumbnail_url],
    movie_url: params[:movie_url],
    likes: params[:likes],
    created_at: Date.today
  }
  record = DB[:projects].insert(data)
  data.to_json
end

get '/projects/:id' do |id|
  DB[:projects].where(id: id).first.to_json
end

# for published and flagged operations and also general updates
put '/projects/:id' do |id|
  allowedParams = params.select do |k,v|
    ['published','flagged','name','photo_url','thumbnail_url','movie_url'].include?(k)
  end
  DB[:projects].where(id: params['id']).update(allowedParams)
  DB[:projects].where(id: params['id']).first.to_json
end

delete '/projects/:id' do |id|
  DB[:projects].where(id: id).delete
  '{"status": "success"}'
end
