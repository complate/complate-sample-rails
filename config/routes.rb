Rails.application.routes.draw do
  get '/' => 'demo#index'
  get '/streaming' => 'demo#streaming'
  get '/error' => 'demo#error'
end
