Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace 'api', {format: 'json'} do
    namespace 'v1' do
      resources :users do
        get 'login', on: :collection
      end
      resources :roadmaps 
      resources :likes
      resources :comments
    end
  end
end
