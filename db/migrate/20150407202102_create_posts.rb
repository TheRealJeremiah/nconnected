class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :feed_id, null: false, index: true
      t.date :post_date, null: false
      t.string :title, null: false, index: true
      t.text :json, null: false

      t.timestamps null: false
    end
  end
end
