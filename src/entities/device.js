import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    id:{
      type:String,
    },
    datetime: {
      type: String,
    },
    token: String,
    role: String,
    userId: String,
});

const Device = mongoose.model('Device', schema);


export default Device