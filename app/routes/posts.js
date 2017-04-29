import Ember from 'ember';

const { Route, RSVP: { all } } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      replace: true,
      as: 's'
    }
  },
  actions: {
    _refreshRoute() {
      this.refresh();
    }
  },
  model({ search }) {
    // We add a promise to represent our query or findAll
    let p = null
    if (search) {
      p = this.store.query('post', { search });
    } else {
      p = this.store.findAll('post');
    }

    return p.then((posts) => {
      // For each post we will access the 'comments' property, which will trigger a loading
      // and we will return the resolution of those promises so we can chain.
      // Using Ember.RSVP.all we give it an array of promises. The promise that 'all' returns
      // will only resolve once all promises given to it resolve.
       let commentsPromises = posts.map((p) => p.get('comments'));
       return all(commentsPromises).then(() => {
          // Now we know all posts & comments have been resolved, so we can return 'posts'
          return posts;
       });
    })
  }
});