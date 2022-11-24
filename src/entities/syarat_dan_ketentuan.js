import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    id:{
      type:String,
      required: true
    },
    syarat_penggunaan: {
      type: String,
      required: true,
      unique:true
    }
});

const SyaratDanKetentuan = mongoose.model('SyaratDanKetentuan', schema);


export default SyaratDanKetentuan