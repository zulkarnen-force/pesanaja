import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
  uid:{
    type:String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  displayName: String,
  password: {
    type: String,
  },
  phoneNumber:   String,
  emailVerfied: Boolean,
  disabled:   Boolean,
  photoURL:   String,
  lastSignInTime: Date,
  creationTime: Date,
  lastRefreshTime: Date,
});

const User = mongoose.model('User', schema);


export default User