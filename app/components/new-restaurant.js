import Ember from 'ember';

export default Ember.Component.extend({
  addRestaurant: false,
  actions: {
    showRestaurantForm(){
      console.log("showRestaurantForm");
      this.set('addRestaurant',true);
    },
    saveRestaurant(){
      var params = {
        name: this.get('name'),
        address: this.get('address'),
        cost: this.get('cost'),
        cuisine: this.get('cuisine'),
        photo: this.get('photo')
      };
      this.sendAction('saveRestaurant', params);
    }
  }
});
