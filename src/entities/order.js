import mongoose  from 'mongoose'
import { Schema } from 'mongoose';


const schema = new Schema({
  id: String,
  runner: String,
  status: String,
  uid: String,
  waktu: Date,
  infoOrder:Object,
  orderData:Object
});

const Order = mongoose.model('Order', schema);


export default Order