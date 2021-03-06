# N-connected

[Heroku link][heroku]

[heroku]: https://nconnected.herokuapp.com

The goal with this project is to apply the technologies I have learned about to
create a solid rails/javascript application. Here is a list of some of those
technologies and where they show up:

- Boostrap/html5: front end design/modals
- Ruby on rails: Hand made user authentication/site backend. Subscribing to feeds, etc. Created api layer to serve backbone models/collections
- Activerecord/sql: searching through feeds
- jQuery: Toggle subscribe/unsibscribe button/ toggle post view on click in 'My feeds'
- backbone.js: Constructing page views from templates/interacting with database.

## Minimum Viable Product
N-connected is a clone of Feedly built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [X] Create accounts
- [X] Create sessions (log in)
- [X] Search for feeds by title
- [ ] Search for feeds by tag
- [X] View instant search results
- [X] Subscribe to feeds
- [X] View a feed of subscribed feeds
- [X] View full posts from feeds


## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, feed subscription, tags (~1 day)
I will implement user authentication in rails, use third party libraries to
get posts from an rss feed. I'll add the tag model, and some seed data so that
feeds are available for users to subscribe to.

[Details][phase-one]

### Phase 2: Viewing feeds and posts (~2 days)
I will add API routes for feeds that will return feed and post data in JSON. I
will then create the corresponding models/collections in backbone. I will then
make feed and post views.

[Details][phase-two]

### Phase 3: User feed view and sidebar/jquery ui (~2 days)
I will create the main user feed view, and work on adding jquery ui transitions
to the main and feed pages so that feeds can pop from the right. I don't want
to save all the css/ui until the end.

[Details][phase-three]

### Phase 4: Search by title and tag (~1-2 days)
I will create the live search view and implement the ability to have results
appear as a term is typed in. I will also implement the ability to click on
a result and have a feed show page pop up with jquery ui.

[Details][phase-four]

### Phase 5: Moderator page, More css/ui debugging (~2 days)
Allow moderators to add curated rss feeds. Would be done through feeds/new route
but permission only given to moderators. Also, It needs to look pretty.

[Details][phase-five]

### Bonus Features (TBD)
- [X] "Like" button for feeds
- [ ] User comments on feeds
- [ ] Suggested feeds on main feed view
- [ ] In page PDF Viewer for journal articles
- [ ] Multiple sessions/session management

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
