Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :feeds, only: [:index, :show]
    resources :subscriptions, only: [:create, :destroy]
  end
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]
end
