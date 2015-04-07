class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :title, null: false, index: true
      t.string :url, null: false
      t.text :description
      
      t.timestamps null: false
    end
  end
end
