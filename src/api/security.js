import * as firebase from 'firebase/firebase';

import baseRequest from './baseRequest';
import firebaseConfig from '../environment/environment';

firebase.initializeApp(firebaseConfig);

export default class Security extends baseRequest {
  constructor() {
    super();
    this.loginMethod = 'authenticate/login';
    this.logoutMethod = 'authenticate/logout';
  }

  login = (credentials) => {
    // returns a UserCredential object
    return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout = () => {
    return firebase.auth().signOut();
  }
}