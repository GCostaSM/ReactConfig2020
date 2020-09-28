import axios from 'axios';

interface Default{
    name:String,
    address:String
}

let insertDefault = async function(state:Default){
    return new Promise((resolve,reject)=>{
        axios.post('/update',state).then((result)=>{
            resolve(result);
        }).catch((error)=>{
            reject(error);
        })
    })
}

export const DefaultService = {
    insertDefault
}