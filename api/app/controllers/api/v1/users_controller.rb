class Api::V1::UsersController < ApplicationController

  #uidからユーザーを返す。ユーザーがいなければ作成して返す
  def login
    # binding.pry
    if User.find_by(uid: user_params[:uid])
      render json: User.find_by(uid: user_params[:uid])
      return
    end

    newUser = User.new(user_params)
    if newUser.save
      render json: newUser
    else
      render json: newUser.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :uid, :profile_image)
  end
end
