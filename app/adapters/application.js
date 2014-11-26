/* globals Firebase, DS */

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://nadieapie.firebaseio.com")
});
