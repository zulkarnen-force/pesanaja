import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const topUpSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    gambar_bukti: [String],
    uid_user: String,
    dataTopup: Object,
    userData: Object,
    waktu_konfirmasi: Date,
    selesai: Boolean
});

const Topup = mongoose.model('Topup', topUpSchema);


export default Topup