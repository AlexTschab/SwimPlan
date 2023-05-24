class FavoritesController < ApplicationController


  def index
    @user = current_user
    @favorites = @user.favorites
  end

  def new
    @favorite = Favorite.new
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render json: { status: "created", favorite: @favorite }
    else
      render json: { status: "error", errors: @favorite.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def destroy
    @favorite = Favorite.find(params[:id])
    if @favorite.destroy
      render json: { status: 'removed' }
    else
      render json: { status: 'error', message: 'Failed to remove favorite' }, status: :unprocessable_entity
    end
  end




  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :training_id)
  end

end
