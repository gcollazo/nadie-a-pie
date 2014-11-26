import Ember from 'ember';

export default Ember.ArrayController.extend({
    itemController: 'message',

    messageCount: function() {
        return this.get('content.length');
    }.property('content.[]'),

    passengerTotal: Ember.computed.sum([1,2,0,44,5]),

    actions: {
        pickup: function(model) {
            model.set('status', 'Completado');
            model.save();
        },

        cancel: function(model) {
            model.set('status', 'Cancelado');
            model.save();
        }
    }
});
