class Api::FeedsController < ApplicationController
  def index
    @feeds = Feed.all
    render :index
  end

  def show
    @feed = Feed.find(params[:id])
    render :show
  end
end
