Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :posts do
      resources :comments, only: [:index, :create]
    end
<<<<<<< HEAD
    resources :users, only: [:index]
    resources :feeds, only: [:index]

=======
    resources :users, only: [:index] do
      resources :comments, only: [:index, :create]
    end
>>>>>>> add comment
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
