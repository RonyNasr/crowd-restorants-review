import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions:{
    updateRating(rating){
      this.set('rating', rating);
    },
    saveReview(){
      console.log("new-review");
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        rating: this.get('rating')|| "0",
        time: moment().format("MMM Do YYYY, HH:mm "),
        restaurant: this.get('restaurant')
      };
      this.sendAction('saveReview', params);
      this.set('author', "");
      this.set('content', "");
    },

  }
});
