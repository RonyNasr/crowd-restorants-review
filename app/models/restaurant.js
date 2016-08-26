import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  cost: DS.attr(),
  cuisine: DS.attr(),
  photo: DS.attr(),
});
