import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.store.createRecord('invitation');
    },

    actions: {
        saveInvitation(newEmail) {
            newEmail.save().then((response) => {
                this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
            })    
        },
    
        willTransition(){
            this.controller.get('model').rollbackAttributes();
        }
   
    }

});