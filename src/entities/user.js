import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    uid:{
      type:String,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    emailVerified: Boolean,
    displayName: String,
    disabled: Boolean,
    tokensValidAfterTime: Date,
    lastSignInTime: Date,
    creationTime: Date,
    lastRefreshTime:Date,
});

const User = mongoose.model('User', schema);


export default User