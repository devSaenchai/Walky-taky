// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRZ_E78l5EDRAgyHvE81aZAg9XWZySNrE",
    databaseURL: "https://walky-taky-6b118-default-rtdb.firebaseio.com",
    projectId: "walky-taky-6b118"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setup references
const db = firebase.database().ref('walkytaky_saenchai');
const presenceRef = db.child('presence');
