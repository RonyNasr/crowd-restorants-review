import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  rating: DS.attr(),
  time: DS.attr(),
  restaurant: DS.belongsTo('restaurant', {async: true})
});
