/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');

// https://github.com/react-boilerplate/react-boilerplate/issues/2952
const firebaseConfig = {
    apiKey: "AIzaSyAXj6to7_Pbxu2EW4lBqfwMZArmbO1_BBY",
    authDomain: "aula-push-villas.firebaseapp.com",
    projectId: "aula-push-villas",
    storageBucket: "aula-push-villas.appspot.com",
    messagingSenderId: "51705380410",
    appId: "1:51705380410:web:41c895015c743afd1b7f03"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('sw bg message event: ', payload);
});

// O evento onMessage pertence ao contexto de Windows e não do service worker
//https://stackoverflow.com/questions/42964547/uncaught-firebaseerror-messaging-this-method-is-available-in-a-window-context
