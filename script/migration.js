import dotenv from 'dotenv'
import fs from 'fs'
import mongoose from 'mongoose'
import Admin from '../src/entities/admin.js'
import Device from '../src/entities/device.js'
import Product from '../src/entities/product.js'
import Topup from '../src/entities/topup.js'
import User from '../src/entities/user.js'
import Owner from '../src/entities/owner.js'
import Order from '../src/entities/order.js'
import Promo from '../src/entities/promo.js'
import Member from '../src/entities/member.js'
import Quote from '../src/entities/quote.js'
import Runner from '../src/entities/runner.js'
import Setting from '../src/entities/setting.js'
import SpotAntar from '../src/entities/spot_antar.js'
import SyaratDanKetentuan from '../src/entities/syarat_dan_ketentuan.js'
import Review from '../src/entities/review.js'
import Kritik from '../src/entities/kritik.js'
import UserFavorite from '../src/entities/user_favorite.js'


dotenv.config({path:"../.env"})

function readJson(path = '') {
    let data = fs.readFileSync(path)
    let obj = JSON.parse(data) 
    return obj
}


async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (e) {
        console.error(`[Error] ${e.message}`)
    }
}


let modelsAndFilenames = [
    {
        model: User,
        filename: 'auth_users'
    },
    {
        filename: "products",
        model: Product
    },
    {
        filename: "admin",
        model: Admin,
    },
    {
        filename: "devices",
        model: Device        
    },
    {
        filename: "members",
        model: Member
    }, 
    {
        filename: "owner",
        model: Owner
    }, 
    {
        filename: "pesanan",
        model: Order
    }, 
    {
        filename: "promosi",
        model: Promo
    }, 
    {
        filename: "quotes",
        model: Quote
    }, 
    {
        filename: "runner",
        model: Runner
    }, 
    {
        filename: "settings",
        model: Setting
    },
    {
        filename: "spot_antar",
        model: SpotAntar
    },
    {
        filename: "syarat_ketentuan",
        model: SyaratDanKetentuan
    },
    {
        filename: "topup",
        model: Topup
    }, 
    {
        filename: "ulasan",
        model: Review
    },
    {
        filename: "user_favorite",
        model: UserFavorite
    },
    {
        filename: "kritik",
        model: Kritik
    }, 
]


function insert(model, data) {
    connect()
    model.insertMany(data).then(() => console.log(`[OK] ${model.modelName}`)).catch(e => console.log("[x Error]", e))
}


// async function migrates(modelsAndFilenames = {}) {

//     for (const modelAndFilename of modelsAndFilenames) {
//         let data = readJson(`./data/${modelAndFilename.filename}.json`)
//         insert(modelAndFilename.model, data)
//     }
// }


// migrates(modelsAndFilenames).then().catch()


// insert(Device, readJson('./data/devices.json'))
// review
// insert(Review, readJson('./data/ulasan.json'))
// runnner
// user_favorite
insert(UserFavorite, readJson('./data/user_favorite.json'))

