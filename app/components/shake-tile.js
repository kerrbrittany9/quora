import Ember from 'ember';

export default Ember.Component.extend({
  updateShakeForm: false,
  actions: {
    update(shake, params) {
      this.sendAction('update', shake, params);
    }
  }
});
