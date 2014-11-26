import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createMessage: function() {
            var self = this;
            this.store.createRecord('message', {
                from: this.get('from'),
                to: this.get('to'),
                passengers: parseInt(this.get('passengers'), 10)
            }).save().then(function() {
                self.set('from', '');
                self.set('to', '');
                self.set('passengers', '');
                self.transitionToRoute('messages.index');
            });
            console.log('Create messge');
        }
    }
});
