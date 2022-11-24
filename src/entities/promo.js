import mongoose  from 'mongoose'
import { Schema } from 'mongoose';


const schema = new Schema({
    id:{
      type:String,
      required: true
    },
    nama_promo: {
      type: String
    },
    kode_promo: {
      type: String
    }
});

const Promo = mongoose.model('Promo', schema);


export default Promo