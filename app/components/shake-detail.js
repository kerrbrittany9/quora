import Ember from 'ember';

export default Ember.Component.extend({
  update(response, params) {
      this.sendAction('update', response, params);
    }
});
