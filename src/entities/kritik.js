import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    id:{
      type:String,
    },
    nama: {
      type: String,
    },
    kritik: String,
});

const Kritik = mongoose.model('Kritik', schema);


export default Kritik