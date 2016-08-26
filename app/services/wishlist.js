import Ember from 'ember';

export default Ember.Service.extend({
  isFavorite: false,
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },

});
