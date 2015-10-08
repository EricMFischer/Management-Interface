require 'sinatra'
require 'sinatra/json'

get '/' do
  'Hello world!'
end

# get '/' do
#   content_type :json
#   { :key1 => 'value1', :key2 => 'value2' }.to_json
# end