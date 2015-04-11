class Api::PostsController < ApplicationController
  def index
    if params[:feed_id]
      @feed = Feed.find(params[:feed_id])
      @posts = @feed.fetch_entries
      render :index
    elsif logged_in?
      @posts = current_user.all_feed_posts
      render :index
    end
  end
end
