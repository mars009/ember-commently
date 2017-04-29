import Ember from 'ember';
// We import 'task' from ember-concurrency
import { task } from 'ember-concurrency'; 

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-comment'],
  editMode: false,
   // Tasks don't belong in the action block, they are just props of the object
  saveComment: task(function* () {
    // What 'yield' of the promised returned by 'save' does is letting the generator function know
    // that it needs to pause and come back when this Async thing has finished. Any variables
    // around your 'yields' will be preserved (so enclosed) waiting for us when we resume.
    // NOTE: We also don't need the guard to check if the component is destroyed or being destroyed
    yield this.get('model').save().catch(() => { 
      console.log('catching 401 error');
      this.set('editMode', false);
    });
  })
});