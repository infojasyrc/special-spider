import { FirebaseApp, initializeApp } from 'firebase/app'

import firebaseConfig from '../../../environment/environment'

let app: FirebaseApp

const getFirebaseApp = () => {
  if (!app) {
    app = initializeApp(firebaseConfig)
  }
  return app
}

export default getFirebaseApp
