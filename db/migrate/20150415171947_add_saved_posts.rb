class AddSavedPosts < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false, index: true
      t.integer :post_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
