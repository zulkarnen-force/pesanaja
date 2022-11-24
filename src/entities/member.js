import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const schema = new Schema({
    id: String,
    alamat: String,
    about: String,
    nomerVerified: Boolean,
    email:String,
    no_hp: String,
    gender: String,
    username: String,
    bio: String,
    saldo: Number,
    avatar: String,
    role: String,
    name: String,
});

const Member = mongoose.model('Member', schema);


export default Member