import Ember from 'ember';
// We import 'task' from ember-concurrency
import { task } from 'ember-concurrency'; 

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-comment'],
  editMode: false,
  actions: {
    saveComment() {
      // Save the comment
      this.get('model').save().then(() => {
        // Set editMode back to false
        this.set('editMode', false);
      }).catch(() => {
        console.log('here');
        // Set editMode back to false
        setTimeout(() => {
          console.log('in here');
          this.set('editMode', false);
        }, 5000);
      });
    }
  }
});