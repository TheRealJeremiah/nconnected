class RemovePostDate < ActiveRecord::Migration
  def change
    remove_column :posts, :post_date, :date
  end
end
