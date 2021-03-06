class Api::PostsController < ApplicationController
  def index
    if params[:feed_id]
      @feed = Feed.find(params[:feed_id])
      @posts = @feed.fetch_entries
      @favorite_posts = []
      render :index
    elsif logged_in?
      if params[:only_favs]
        @favorite_posts = current_user.favorite_posts
        render :fav_index
      else
        @posts = current_user.all_feed_posts
        @favorite_posts = current_user.favorite_posts
        render :index
      end
    end
  end
end
