import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  update(response, params) {
      this.sendAction('update', response, params);
    }
  }
});
