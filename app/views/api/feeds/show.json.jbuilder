json.subscribed !!(logged_in? && current_user.subscription_id(@feed))
if logged_in?
  json.subscriptionId current_user.subscription_id(@feed)
else
  json.subscriptionId false
end
json.id @feed.id
json.title @feed.title
json.url @feed.url
json.description @feed.description
