import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    id:{
      type:String,
      required: true
    },
    id_menu: {
      type: String
    },
    pemberi_ulasan: String,
    ulasan: String
});


const Review = mongoose.model('Review', schema);


export default Review