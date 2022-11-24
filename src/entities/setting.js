import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    id:{
      type:String,
      required: true
    }
});

const Setting = mongoose.model('Setting', schema);


export default Setting