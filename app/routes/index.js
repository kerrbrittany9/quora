import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('shake');
  },

  actions: {
  saveShake(params) {
    var newShake = this.store.createRecord('shake', params);
    newShake.save();
    this.transitionTo('index');
    }
  }
});
