import mongoose  from 'mongoose'
import { Schema } from 'mongoose';


// {
//     "id": "duzikNcHnXWq24JNjW2ZpxTHi0t1",
//     "no_hp": "082198571958",
//     "about": "bangun runner 1",
//     "created_at": "2020-01-20T07:29:38.000Z",
//     "penghasilan": 39000,
//     "email": "bangun_runner@gmail.com",
//     "username": "bangun_runner",
//     "role": "runner",
//     "bio": "well done",
//     "gender": "male",
//     "name": "Bangun Prakas Sujatmiko",
//     "avatar": "duzikNcHnXWq24JNjW2ZpxTHi0t1/avatar.png",
//     "status": true,
//     "disabled": true
//   },

const schema = new Schema({
    id: String,
    no_hp: String,
    about: String,
    created_at: Date,
    penghasilan: Number,
    email: String,
    username: String,
    role: String,
    bio: String,
    gender: String,
    name: String,
    avatar: String,
    status: Boolean, 
    disabled: String,
});

const Runner = mongoose.model('Runner', schema);


export default Runner