Rails.application.routes.draw do
  post '/guides', to: 'guides#create'
end
