# json.subscribed !!(logged_in? && current_user.subscription_id(@feed))
# if logged_in?
#   json.subscriptionId current_user.subscription_id(@feed)
# else
#   json.subscriptionId false
# end
# json.id @feed.id
# json.title @feed.title
# json.url @feed.url
# json.description @feed.description

json.posts do
  json.array! @posts do |post|
    json.id post.id
    json.favorited @favorite_posts.include?(post)
    json.favoritedId current_user.favorite_id(post)
    json.title post.title
    json.url post.url
    json.summary post.summary
    json.published post.published
  end
end
