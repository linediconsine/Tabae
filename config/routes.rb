Rails.application.routes.draw do
  devise_for :users
  resources :sentences

  root 'sentences#welcome'
  
  # secondary routing 
  get '/terms_and_conditions', to: "sentences#terms_and_conditions"
  get '/privacy_policy', to: "sentences#privacy_policy"
  get '/disclaimer', to: "sentences#disclaimer"

  get '/coming_soon', to: 'sentences#coming_soon'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  post 'api/new', to: 'sentences#apicreate'
end
