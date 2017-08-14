import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
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
