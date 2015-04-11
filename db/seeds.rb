#make some feeds and a demo user
Feed.destroy_all

feed = Feed.create(title: "terry tao blog", url: "https://terrytao.wordpress.com/feed/", description: "Updates on my research and expository papers, discussion of open problems, and other maths-related topics")
feed2 = Feed.create(title: "David Mumford's blog" ,url: "http://www.dam.brown.edu/people/mumford/rss.xml", description: "An archive for Reprints, Notes, Talks, and Blog from David Mumfords work")
