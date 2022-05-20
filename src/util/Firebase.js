import firebase from 'firebase';


export class Firebase{

    constructor(){

        this._config = {

            apiKey: "AIzaSyCX_u6RC9E0zCoSQVw7viRIwKJMuLdVIuw",

            authDomain: "whatsappclone-cd0be.firebaseapp.com",
        
            projectId: "whatsappclone-cd0be",
        
            storageBucket: "whatsappclone-cd0be.appspot.com",
        
            messagingSenderId: "779207028472",
        
            appId: "1:779207028472:web:cf19f129e21fbe7a92950d"
                    
          };

        this.init();
    }

    init(){
        // Your web app's Firebase configuration
        if(!window._initializedFirebase){
            
            firebase.initializeApp(this._config);
    
            firebase.firestore().settings({
                timestampsInSnapshots:true
            })
            window._initializedFirebase= true;
        }
        
    }

    static db(){

        return firebase.firestore();
    }

    static hd(){

        return firebase.storage();
    }

    initAuth(){

        return new Promise((s,f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();
            
            firebase.auth().signInWithPopup(provider).then(result=>{

                let token = result.credential.accessToken;
                let user = result.user;
                
                s({
                    user,
                    token
                });

            }).catch(err=>{
                f(err);
            })  
        
        });
    }
}