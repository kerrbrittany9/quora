import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
    actions: {
      responseFormShow() {
        this.set('addNewResponse', true);
      },
      saveResponse() {
       var params = {
         answer: this.get('answer'),
         writer: this.get('writer'),
         shake: this.get('shake')
       };
       this.set('addNewResponse', false);
       this.sendAction('saveResponse', params);
     }
    }
  });
