import Ember from 'ember';

export default Ember.Controller.extend({
  message: '',
  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),
  isValidForm: Ember.computed.and('isValidEmail', 'isValidMessage'),

  isDisabled:Ember.computed.not('isValidForm'),

  actions: {

    saveContact() {
      const email = this.get('emailAddress');
      const message = this.get('message');
      const newContact = this.store.createRecord('contact', { 
        email: email,
        message: message
      });
      newContact.save().then(()=> {
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')} and your message ${this.get('message')}`);
        this.set('emailAddress', '');
        this.set('message', '');
      })
    }
   
  }
});


