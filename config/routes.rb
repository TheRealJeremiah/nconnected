Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :feeds, only: [:index, :show] do
     resources :posts, only: [:index]
    end
    resources :posts, only: [:index]
    resources :subscriptions, only: [:create, :destroy]
  end
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]
end
