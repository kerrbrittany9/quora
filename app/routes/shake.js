import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('shake', params.shake_id);
},

actions: {
  update(shake, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        shake.set(key,params[key]);
      }
    });
    shake.save();
    this.transitionTo('shake');
  },

  saveResponse(params) {
     var newResponse = this.store.createRecord('response', params);
     var shake = params.shake;
     shake.get('responses').addObject(newResponse);
     newResponse.save().then(function() {
       return shake.save();
     });
     this.transitionTo('shake', shake);
   }
  }
});
