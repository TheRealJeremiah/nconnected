class Api::PostsController < ApplicationController
  def index
    @feed = Feed.find(params[:feed_id])
    @posts = @feed.fetch_entries
    render :index
  end
end
