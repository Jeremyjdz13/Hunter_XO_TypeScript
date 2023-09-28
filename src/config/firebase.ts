import { FirebaseApp, initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore";
import { FirebaseConfig } from '../api/types/FirebaseTypes';

let app: FirebaseApp;
let db: ReturnType<typeof getDatabase>;
let auth: ReturnType<typeof getAuth>;
let firestore: ReturnType<typeof getFirestore>;

export function initFirebase(): FirebaseApp {
    if(!app){
      const firebaseConfig: FirebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET!,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
        appId: import.meta.env.VITE_FIREBASE_APP_ID!,
      };
      console.log("Firebase Initialized")
      app = initializeApp(firebaseConfig);
      db = getDatabase(app)
      auth = getAuth(app)
      firestore = getFirestore(app)
    }

    return app;
      
}
export { db, auth, app, firestore }