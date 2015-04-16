json.array! @feeds do |feed|
  json.subscribed !!(logged_in? && current_user.subscription_id(feed)) #TA: unncecessay?
  if logged_in?
    json.subscriptionId current_user.subscription_id(feed)
  else
    json.subscriptionId false  # TA: nil
  end
  json.id feed.id
  json.title feed.title
  json.url feed.url
  json.description feed.description
end
