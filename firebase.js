import * as firebase from 'firebase';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS6A__jE13PJQ_DVHfe6tjbujgJBfmNQg",
  authDomain: "ubereatsclone-334713.firebaseapp.com",
  projectId: "ubereatsclone-334713",
  storageBucket: "ubereatsclone-334713.appspot.com",
  messagingSenderId: "636694644293",
  appId: "1:636694644293:web:d2a03a85451e5fc8a4c52c",
  measurementId: "${config.measurementId}"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
