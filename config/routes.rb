Rails.application.routes.draw do
  # Made index homepage
  root "messages#index"

  resources :messages
end
