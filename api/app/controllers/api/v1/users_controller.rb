class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: @user, roadmaps: @user.roadmaps
    else
      render json: nil
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: {action: action_name, data: @user}

  end

  def update
    @user = User.find(params[:id])
    if !@user 
      return 
    end
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

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
