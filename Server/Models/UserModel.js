import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId:{
        type:String,
        required:true,
        unqiue:true
    },
    email:{
        type:String,
        required:true,
        unqiue:true,
    },
    photo:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    creditBalance:{
        type:Number,
        default:5,
    }


})

const user = mongoose.model.userData || mongoose.model('userData',userSchema); 
export default user;