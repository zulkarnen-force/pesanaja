import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

// {
//     id: 15992460753421381,
//     url: produk/minuman/bjAno3rD34RnOqFeqChjGsp5BXr1/15992460753421381/avatar.png,
//     harga: 3000,
//     kategori: minuman,
//     nama: Es jeruk,
//     id_warung: bjAno3rD34RnOqFeqChjGsp5BXr1,
//     tanggal_tambah: 2020-09-04T19:01:27.000Z,
//     status: true,
//     stok: 14,
//     ongkir: ongkir,
//     harga_ongkir: 1000
//   },

const schema = new Schema({
    id: String,
    url: String,
    harga: Number,
    kategori: String,
    nama: String,
    id_warung: String,
    tanggal_tambah: Date,
    status: Boolean,
    stok: Number,
    ongkir: String,
    harga_ongkir: Number
});

const Product = mongoose.model('Product', schema);


export default Product