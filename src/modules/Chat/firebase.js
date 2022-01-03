import * as firebase from 'firebase';

const config = {
    apiKey: '',
    authDomain: 'mobilemangtix.firebaseapp.com',
    databaseURL: 'https://mobilemangtix.firebaseio.com',
    projectId: 'mobilemangtix',
    storageBucket: 'mobilemangtix.appspot.com',
    messagingSenderId: '',
};

firebase.initializeApp(config);

const database = firebase.database();

export {
    database,
};
