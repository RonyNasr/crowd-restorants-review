import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('restaurant', params.restaurant_id);
  },
  actions: {
    saveReview(params){
      console.log(params);
      var newReview = this.store.createRecord('review',params);
      var restaurant = params.restaurant;
      restaurant.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return restaurant.save();
      });
      this.transitionTo('review', params.restaurant);
    },
    deleteReview(review){
      review.destroyRecord();
      this.transitionTo('review');
    }
  }
});
