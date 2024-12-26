// solution.js
// ... other code ...

firebase.database().goOffline(); // Go offline to avoid stale reads

// Explicitly fetch rules
firebase.database().goOnline().then(() => {
  // ... your database operations ...
  console.log('Successfully updated Database rules')
}).catch((error) => {
  console.error('Error updating rules:', error);
});

// alternatively to handle caching:
//firebase.app().delete().then(function() {
 //   firebase.initializeApp(firebaseConfig); // reinitialize app
// }).catch(function(error) {
//   console.log('Error:', error);
// });