import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  // isDisabled: Ember.computed.empty('emailAddress')
  // The next code is the same as avove
  // isDisabled: Ember.computed('emailAddress', function() {
  //   return this.get('emailAddress') === '';
  // })

  actions: {

    saveInvitation() {
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
