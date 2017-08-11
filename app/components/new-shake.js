import Ember from 'ember';

export default Ember.Component.extend({
  addNewShake: false,
   actions: {
     shakeFormShow() {
       this.set('addNewShake', true);
     },

     saveShake() {
       var params = {
         question: this.get('question') ? this.get('question') : "",
         author: this.get('author') ? this.get('author') : "",
         notes: this.get('notes') ? this.get('notes') : "",
       };
       this.set('addNewShake', false);
       this.sendAction('saveShake', params);
     }
   }
 });
