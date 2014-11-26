import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('string'),
  to: DS.attr('string'),
  passengers: DS.attr('number'),
  created: DS.attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  status: DS.attr('string', {
    defaultValue: function() { return 'Esperando'; }
  })
});
