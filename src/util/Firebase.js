import firebase from 'firebase';

require('firebase/firestore');

export class Firebase{

    constructor(){

        this._initialized = false;
        this._config = {

            apiKey: "AIzaSyDCL8_vLDHWD3BWTwVtbfgX0ZanZRrASWs",
            authDomain: "whatsappclone-492f1.firebaseapp.com",
            projectId: "whatsappclone-492f1",
            storageBucket: "whatsappclone-492f1.appspot.com",
            messagingSenderId: "398045007617",
            appId: "1:398045007617:web:7aef3a6a0f447601fad500"
          
          };

        this.init();
    }

    init(){
        // Your web app's Firebase configuration
        if(!this._initialized){
            
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots:true
            })
            this._initialized = true;
        }
        
    }

    static db(){

        return firebase.firestore();
    }

    static hd(){

        return firebase.storage();
    }
}