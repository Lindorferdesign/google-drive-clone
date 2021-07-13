const firebaseConfig = {
    apiKey: "AIzaSyCj49OkyQvY7fsGpkLDkAYoJSODH6jqfmo",
    authDomain: "docs-clone-e7316.firebaseapp.com",
    projectId: "docs-clone-e7316",
    storageBucket: "docs-clone-e7316.appspot.com",
    messagingSenderId: "479317647414",
    appId: "1:479317647414:web:ce6d0a933bf5d5ade03897"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  export { db };