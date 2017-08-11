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
  },
  update(shake, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        shake.set(key,params[key]);
      }
    });
    shake.save();
    this.transitionTo('index');
    }
  }
});
