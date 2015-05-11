Rails.application.routes.draw do
  devise_for :users
  resources :notes
  get 'welcome/index'
  get 'blog' => 'notes#blog'

  authenticated :user do
  	root 'notes#index', as: "authenticated_root"
  end

  	root 'welcome#index'
  	
end
