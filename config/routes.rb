Rails.application.routes.draw do
  post '/guides', to: 'guides#create'
  put '/guides/:id', to: 'guides#update'

end
