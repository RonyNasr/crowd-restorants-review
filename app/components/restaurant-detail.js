import Ember from 'ember';

export default Ember.Component.extend({
  avgRating: Ember.computed('restaurant.reviews.@each.rating', function(){
    var total = 0;
    var count = this.get('restaurant.reviews.length');
    this.get('restaurant.reviews').forEach(function(review){
      console.log(review.get('rating'));
      total += parseInt(review.get('rating'));
    });
    console.log(total/count);
    return total/count;
  }),
});
