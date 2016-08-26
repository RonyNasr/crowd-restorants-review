import Ember from 'ember';

export function costHelper(params) {
  var servicePrice = parseFloat(params[0].get('cost'));
 if (servicePrice >= 50.00){
   return '$$$';
 } else if (servicePrice >= 25.00){
   return '$$';
 } else if (servicePrice <= 24.99){
   return '$';
 }
}

export default Ember.Helper.helper(costHelper);
