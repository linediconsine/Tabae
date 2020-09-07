Rails.application.routes.draw do
  devise_for :users
  resources :sentences

  root 'sentences#welcome'

  get '/terms_and_condtions', to: "sentences#terms_and_condtions"

  get '/coming_soon', to: 'sentences#coming_soon'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  post 'api/new', to: 'sentences#apicreate'
end
