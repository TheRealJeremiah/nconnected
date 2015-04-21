#make some feeds and a demo user
Feed.destroy_all

feed = Feed.create(title: "terry tao blog", url: "https://terrytao.wordpress.com/feed/", description: "Updates on my research and expository papers, discussion of open problems, and other maths-related topics")
feed2 = Feed.create(title: "David Mumford's blog", url: "http://www.dam.brown.edu/people/mumford/rss.xml", description: "An archive for Reprints, Notes, Talks, and Blog from David Mumfords work")
feed3 = Feed.create(title: "Shtetl-Optimized blog", url: "http://www.scottaaronson.com/blog/?feed=rss2", description: "The blog of Scott Aaronson")
feed4 = Feed.create(title: "Blog on math blogs", url: "http://blogs.ams.org/blogonmathblogs/feed/", description: "Blog of the American Mathematical Society")

feed5 = Feed.create(title: "Igor Pak's blog", url: "https://igorpak.wordpress.com/feed/", description: "Views on life and math")
feed6 = Feed.create(title: "Gowers's Weblog", url: "https://gowers.wordpress.com/feed/", description: "Mathematics related discussions")
feed7 = Feed.create(title: "Low Dimensional Topology", url: "https://ldtopology.wordpress.com/feed/", description: "Recent progress and open problems")
feed8 = Feed.create(title: "Motivic Stuff", url: "https://homotopical.wordpress.com/feed/", description: "Cohomology, homotopy theory, and arithmetic geometry")

feed9 = Feed.create(title: "The n-Category Cafe", url: "https://golem.ph.utexas.edu/category/atom10.xml", description: "A group blog on math, physics and philosophy")
feed10 = Feed.create(title: "Life on the lattice", url: "http://latticeqcd.blogspot.com/feeds/posts/default", description: "Thoughts on lattice QCD, particle physics and the world at large.")
feed11 = Feed.create(title: "Quantum Diaries", url: "http://www.quantumdiaries.org/feed/", description: "Thoughts on work and life from particle physicists from around the world.")
feed12 = Feed.create(title: "Symmetry factor", url: "https://apetrov.wordpress.com/feed/", description: "Life in physics and nearby")

feed13 = Feed.create(title: "Life as a Physicist", url: "https://gordonwatts.wordpress.com/feed/", description: "Particle Physicist. In the wild.")
feed14 = Feed.create(title: "Division by Zero", url: "http://divisbyzero.com/feed/", description: "A blog about math, puzzles, teaching, and academic technology")
feed15 = Feed.create(title: "Tanya Khovanova's Math Blog", url: "http://blog.tanyakhovanova.com/feed/", description: "Mathematics, applications of mathematics to life in general, and my life as a mathematician.")
feed16 = Feed.create(title: "Williams College Math Blog", url: "http://math.williams.edu/category/blog/feed/", description: "blog")

# feed17 = Feed.create(title: "title", url: "url", description: "blog")
# feed18 = Feed.create(title: "title", url: "url", description: "blog")
# feed19 = Feed.create(title: "title", url: "url", description: "blog")
# feed20 = Feed.create(title: "title", url: "url", description: "blog")
#
# feed21 = Feed.create(title: "title", url: "url", description: "blog")
# feed22 = Feed.create(title: "title", url: "url", description: "blog")
# feed23 = Feed.create(title: "title", url: "url", description: "blog")
# feed24 = Feed.create(title: "title", url: "url", description: "blog")
#
# feed25 = Feed.create(title: "title", url: "url", description: "blog")
# feed26 = Feed.create(title: "title", url: "url", description: "blog")
# feed27 = Feed.create(title: "title", url: "url", description: "blog")
# feed28 = Feed.create(title: "title", url: "url", description: "blog")
#
# feed29 = Feed.create(title: "title", url: "url", description: "blog")
# feed30 = Feed.create(title: "title", url: "url", description: "blog")
# feed31 = Feed.create(title: "title", url: "url", description: "blog")
# feed32 = Feed.create(title: "title", url: "url", description: "blog")
