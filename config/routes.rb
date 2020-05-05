Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  namespace :users, only: [:edit, :update] do
    resources :searches, only: :index
  end
  resources :groups, only: [:new, :create, :edit, :update, :index] do
    resources :messages, only: [:index, :create]
  end
end
