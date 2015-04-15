class UpdatePostModel < ActiveRecord::Migration
  def change
    add_column :feeds, :latest_post_date, :datetime

    add_column :posts, :url, :string
    add_column :posts, :summary, :text
    add_column :posts, :published, :datetime
  end
end
