class Api::FeedsController < ApplicationController
  def index
    if params[:user_feed_only]
      @feeds = current_user.feeds
    else
      @feeds = Feed.all
    end
    render :index
  end

  def show
    @feed = Feed.find(params[:id])
    render :show
  end
end
