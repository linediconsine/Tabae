Rails.application.routes.draw do
  #resources :boards
  devise_for :users
  resources :sentences
  
  root 'sentences#welcome'
  
  # secondary routing 
  get '/terms_and_conditions', to: "sentences#terms_and_conditions"
  get '/privacy_policy', to: "sentences#privacy_policy"
  get '/disclaimer', to: "sentences#disclaimer"
  get '/coming_soon', to: 'sentences#coming_soon'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  get '/dashboard.json', to: "sentences#dashboard"
  post '/api/new', to: 'sentences#apicreate'
  get '/api/token', to: 'sentences#get_api_usertoken'
  get '/api/login', to: 'sentences#token_access'
  
end
