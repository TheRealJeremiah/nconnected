json.posts do
  json.array! @favorite_posts do |post|
    json.id post.id
    json.favorited true
    json.favoritedId current_user.favorite_id(post)
    json.title post.title
    json.url post.url
    json.summary post.summary
    json.published post.published
  end
end
