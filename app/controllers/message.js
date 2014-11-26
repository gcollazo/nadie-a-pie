import Ember from 'ember';

export default Ember.ObjectController.extend({
    isWaiting: function() {
        return this.get('status') === 'Esperando';
    }.property('status')
});
