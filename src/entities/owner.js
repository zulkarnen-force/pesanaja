import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
  id: String,
  verifikasi: Boolean,
  avatar: String,
  email: String,
  nama: String ,
  role: String,
  status: Boolean,
  alamat: String,
  bio: String,
  pendapatan: Number,
  rating: [Number],
  nama_owner: String
});

const Owner = mongoose.model('Owner', schema);


export default Owner