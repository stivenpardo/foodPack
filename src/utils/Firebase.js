import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCp1gheRkvfrivYQGafo6lW3RwU41Cn0ng",
    authDomain: "foodpack-882b8.firebaseapp.com",
    databaseURL: "https://foodpack-882b8.firebaseio.com",
    projectId: "foodpack-882b8",
    storageBucket: "foodpack-882b8.appspot.com",
    messagingSenderId: "446686537068",
    appId: "1:446686537068:web:07103d88c96bfef7db3f49"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)