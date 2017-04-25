Rails.application.routes.draw do
  root to: 'welcome#index'
  resources :users, except: [:index]
  resources :sessions, only: [:new, :create, :destroy]
end
