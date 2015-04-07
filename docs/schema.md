# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## subscriptions
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
feed_id       | integer   | not null, foreign key (references blogs)
subscriber_id | integer   | not null, foreign key (references users)

## feeds
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
url           | string    | not null
title         | string    | not null, index
description   | text      |

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key (references feeds)
post_date   | date      | not null
title       | string    | not null
json        | text      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key (references posts)
tag_id      | integer   | not null, foreign key (references tags)
