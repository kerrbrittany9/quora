import Ember from 'ember';

export default Ember.Component.extend({

    updateResponseForm: false,
     actions: {
       updateResponseForm() {
         this.set('updateResponseForm', true);
       },
       update(response) {
         var params = {
           answer: this.get('answer'),
           writer: this.get('writer'),
           shake: this.get('shake'),
         };
         this.set('updateResponseForm', false);
         this.sendAction('update', response, params);
       }
     }
   });
