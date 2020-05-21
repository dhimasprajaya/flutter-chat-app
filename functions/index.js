const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.myFunction = functions.firestore
  .document("chat/{message}")
  .onCreate((snap, context) => {
    const newValue = snap.data();
    console.log(newValue);
    return;
  });
