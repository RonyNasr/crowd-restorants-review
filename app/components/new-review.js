import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions:{
    saveReview(){
      console.log("new-review");
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        rating: this.get('rating'),
        time: moment().format("MMM Do YYYY, HH:mm "),
        restaurant: this.get('restaurant')
      };
      this.sendAction('saveReview', params);
      this.set('author', "");
      this.set('content', "");
    }
  }
});
