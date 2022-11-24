import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    id:{
      type:String,
      required: true
    },
    nama: {
      type: String,
      required: true,
      unique:true
    },
    role: String,
    email: String
});

const Admin = mongoose.model('Admin', schema);


export default Admin