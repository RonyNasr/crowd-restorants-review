import Ember from 'ember';

export default Ember.Component.extend({
    wishlist: Ember.inject.service(),
    actions: {
      addToWishlist(restaurant){
        this.get('wishlist').add(restaurant);
      },


    }
});
