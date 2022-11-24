import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
  id: String,
  quote: String
});

const Qoute = mongoose.model('Qoute', schema);


export default Qoute