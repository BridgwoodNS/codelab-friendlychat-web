/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDBht2wHZ-YSbt_2QR5tr6uUX3MrgzKQzc",

  authDomain: "friendlychat-db3c1.firebaseapp.com",

  projectId: "friendlychat-db3c1",

  storageBucket: "friendlychat-db3c1.appspot.com",

  messagingSenderId: "100225209296",

  appId: "1:100225209296:web:760edd4053dead1b89dfd5"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}