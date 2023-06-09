class UsersController < ApplicationController
  def show
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update(user_params)
      redirect_to user_path(@user), notice: 'Profile picture updated successfully.'
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:photo, :username)
  end
end
