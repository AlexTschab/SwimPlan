Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "about", to: "pages#about"

  resources :trainings, only: [:show, :index, :new, :create, :destroy] do
    resources :blocs, only: [:show, :index, :new, :create] do
      resources :lines, only: [:show, :index, :new, :create]
    end
  end
end
