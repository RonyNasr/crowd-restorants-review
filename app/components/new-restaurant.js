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
        description: this.get('description'),
        cost: this.get('cost'),
        cuisine: this.get('cuisine'),
        photo: this.get('photo')
      };
      this.sendAction('saveRestaurant', params);
      this.set('addRestaurant', false);
      this.set('name',"");
      this.set('address',"");
      this.set('description',"");
      this.set('cost',"");
      this.set('cuisine',"");
      this.set('photo',"");
    }
  }
});
