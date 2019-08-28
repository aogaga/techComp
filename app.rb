require 'sinatra'
require 'json'
require 'rubygems'
require 'active_record'
require 'sinatra/cross_origin'


ActiveRecord::Base.establish_connection(
    adapter: "mysql2",
    host: "localhost",
    database: "tech_comp",
    username: "root",
    password: "")

before do
  headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
  headers['Access-Control-Allow-Origin'] = '*'
  headers['Access-Control-Allow-Headers'] = 'accept, authorization, origin'
end

options '*' do
  response.headers['Allow'] = 'HEAD,GET,PUT,DELETE,OPTIONS,POST'
  response.headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept'
end


class Comp < ActiveRecord::Base
end
get "/" do

  content_type :json
  "hello world".to_json
end
get "/allcomp" do
   content_type :json
    @allcomp = Comp.all
    @allcomp.to_json
 end
