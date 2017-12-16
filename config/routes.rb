Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :posts do
      resources :comments, only: [:index, :create]
    end
    resources :users, only: [:index]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
