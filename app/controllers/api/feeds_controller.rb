class Api::FeedsController < ApplicationController
  def index
    if params[:user_feed_only]
      @feeds = current_user.feeds
    else
      if !params[:title_search]
        @feeds = Feed.all
      else
        @feeds = Feed.where('LOWER(title) ~ LOWER(:title)', :title => params[:title_search])
      end
    end
    render :index
  end

  def show
    @feed = Feed.find(params[:id])
    render :show
  end
end
