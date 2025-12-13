import mongoose from "mongoose";

export async function connect(url){
    await mongoose.connect(`${url}/bgRemover`).then(()=>console.log('DataBase Connected')).catch((e)=>console.log(e));
}