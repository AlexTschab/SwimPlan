Rails.application.routes.draw do
  devise_for :users
  root to: "trainings#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "about", to: "pages#about"
  get "map", to: "pages#map"


  resources :favorites
  resources :users, only: [:show, :edit, :update]


  resources :trainings, only: [:show, :index, :new, :create, :destroy, :edit, :update] do
    resources :blocs, only: [:show, :index, :new, :create] do
      resources :lines, only: [:show, :index, :new, :create]
    end
  end
end
