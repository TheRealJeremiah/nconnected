class Api::FavoritesController < ApplicationController
  before_action do
    render json: { error: 'Not logged in' }, status: 403 unless logged_in?
  end

  def create
    @fav = Favorite.new(fav_params)
    @fav.user_id = current_user.id
    if @fav.save
      render json: @fav
    else
      render json: @fav.errors.full_messages
    end
  end

  def destroy
    # make sure user owns this subscription
    @fav = Favorite.find(params[:id])
    Favorite.destroy(params[:id])
    render json: @fav
  end

  private

  def fav_params
    params.require(:favorite).permit(:user_id, :post_id)
  end
end
