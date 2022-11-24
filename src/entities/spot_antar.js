import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    id:{
      type:String,
      required: true
    },
    lokasi: {
      type: String,
      required: true,
      unique:true
    }
});

const SpotAntar = mongoose.model('SpotAntar', schema);


export default SpotAntar