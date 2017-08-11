import Ember from 'ember';

export default Ember.Component.extend({
  updateShakeForm: false,
  actions: {
    updateShakeForm() {
      this.set('updateShakeForm', true);
    },

    update(shake) {
      var params = {
        question: this.get('question') ? this.get('question') : "",
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('updateShakeForm', false);
      this.sendAction('update', shake, params);
    }
  }
});
