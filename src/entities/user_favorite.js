import mongoose  from 'mongoose'
import { Schema } from 'mongoose';


const schema = new Schema({
  id: String,
  uid: String,
  id_produk: String,
  id_warung: String,
  harga: Number,
  status: Boolean,
  nama: String,
  stok: Number,
  harga_ongkir: Number,
  ongkir: String,
  url: String,
  favorit: Boolean
});

const UserFavorite = mongoose.model('UserFavorite', schema);


export default UserFavorite