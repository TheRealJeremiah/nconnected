class Api::FeedsController < ApplicationController
  def index
    @feeds = Feed.all
    render json: @feeds
  end

  def show
    @feed = Feed.find(params[:id])
    render :show
  end
end
