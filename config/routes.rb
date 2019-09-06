Rails.application.routes.draw do
  root 'site#index'

  get '/guides', to: 'guides#index'
  get '/guides/:id', to: 'guides#show'
  post '/guides', to: 'guides#create'
  delete '/guides/:id', to: 'guides#delete'
  put '/guides/:id', to: 'guides#update'
end
