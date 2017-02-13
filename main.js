var Twitter = require('twitter');
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/database';
const consumer_key = '9ZKPH32Np09KdgLDzvcKqXA8V'
const consumer_secret = 'eekrVEkp7eOyD8oSncxobO4T6fkBPeMhDYmg01LPHfYmSOnZss'
const email = 'endotakashi1992@gmail.com'
const password = '1aKP66Md0ePa'

firebase.initializeApp({apiKey: "AIzaSyDpMeGxNh-VjCXeMDmrAfyXw-pPKgN2ogs", authDomain: "iseeds-1020.firebaseapp.com", databaseURL: "https://iseeds-1020.firebaseio.com", storageBucket: "iseeds-1020.appspot.com", messagingSenderId: "974616571179"});
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
var client = new Twitter({consumer_key, consumer_secret, access_token_key: "825868212201885696-LsY6loh9QmX4xXnqgAzxBeJt44CS2Vg", access_token_secret: "A3wwQJzx85yCQlhM2Xisg3iUvHBZn3M2Rtb7fKl75wnUQ"});

var db = firebase.database();
var ref = db.ref("bookmarks");

const setSuccessfulFirebase = ()=>{

}

const onSuccessTweet = ()=>{

}

const tweet = ()=>{
  onSuccessTweet()
}

// Attach an asynchronous callback to read the data at our posts reference
ref.on("child_added", function(snapshot) {
    console.log(snapshot.val());
    const bookamrk =  snapshot.val()
    if(bookamrk.successful == 'false'){
      tweet()
    }
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});

// client.post('statuses/update', {status: 'Twitter API test'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });
