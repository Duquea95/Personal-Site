Rails.application.routes.draw do
  # Made index homepage
  root "home#index"

  resources :messages
end
