require 'sinatra'
require 'json'
require 'rubygems'
require 'active_record'


ActiveRecord::Base.establish_connection(
    adapter: "mysql2",
    host: "localhost",
    database: "tech_comp",
    username: "root",
    password: "")

# Model
class Comp < ActiveRecord::Base
end 

get "/" do
  # File.read('./views/index.haml')
  # "All the best"

     content_type :json
    @allcomp = Comp.all
    @allcomp.to_json
 end
