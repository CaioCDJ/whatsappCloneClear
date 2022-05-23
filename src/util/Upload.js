import { Firebase } from "./../util/Firebase";


export class Upload{

    static send(file,from){
         
        return new Promise((s,f)=>{
            let uploadTask = Firebase.hd().ref(from).child(Date.now() + '_'+ file.name).put(file);

            uploadTask.on('status_changed', e =>{
                console.info(e);
            }, err=>{
                console.log(err);
            }, ()=>{
                s(uploadTask.snapshot);
            })
        });
    }
}