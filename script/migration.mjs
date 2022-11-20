import dotenv from 'dotenv'
import fs from 'fs'
import mongoose from 'mongoose'
import User from '../src/entities/user.js'

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


let modelsAndFilenames = [{
    model: User,
    filename: 'auth_users'
}]

function insert(model, data) {
    connect()
    User.insertMany(data).then(() => console.log(`[OK] ${model.modelName}`)).catch(e => console.log("[x Error]", e))
}

async function migrates(modelsAndFilenames = {}) {

    for (const modelAndFilename of modelsAndFilenames) {
        let data = readJson(`./data/${modelAndFilename.filename}.json`)
        insert(modelAndFilename.model, data)
    }
}


migrates(modelsAndFilenames).then().catch()

// async function migrate() {
//     try {
//         let conn = await mongoose.connect(process.env.MONGO_URL)
//         await migrateUser()
//     } catch (err) {
//         console.log("[Error] ", err)
//     }
// }


// migrate().then().catch()
// let data = fs.readFileSync('./data/auth_users.json')
// console.log(JSON.parse(data))

// .then(conn => {
   
//     let users = readJson('./data/auth_users.json')
//     console.log(users)

//     User.insertMany(users).then(result => {
//         console.log("result")
//     }).catch(err => {
//         console.error(err)
//     })
// }, error => {
//     console.log("error connect to database", error)
// })

// async function migrationUser() {
//     let data = readToObject('./users_mongoable1667572754376.json')
//     await getDB()
//     User.insertMany(data).then(() => console.log("Success")).catch(e => console.log(e))
// }



// async function migrationFromJson(filename, model) {
//     let data = readToObject(filename)
//     await getDB()
//     model.insertMany(data).then(() => console.log("Success")).catch(e => console.log(e))
// }


// async function check() {
//     let users = await User.find()
//     console.log(users)
// } 

// function test() {
//     let data = readToObject('./users.json')
//     data.forEach(e => {
//         let data = new Date(e.metadata.lastSignInTime)
      
//         console.log(data)
        

//     });
//     let date = new Date()
//     console.log(new Date(Date.now()))
// } 

// test()

// migrationCards().then().catch()
// migrationFromJson("./tasks.json", Task).then().catch()
// migrationFromJson("./posts.json", Post).then().catch()
// migrationFromJson("./members.json", Member).then().catch()

// async function migrationFromJson(filename, model) {

//     await getDB()
//     let data = readToObject(filename)
//     model.insertMany(data).then(() => console.log("OK: Migrate")).catch(e => console.log(e))
    
// }





// async function up(filenames, models) {
//     for (let i = 0; i < models.length; i++) {
//         const model = models[i];
//         await migrationFromJson(`${filenames[i]}.json`, model)
//     }
// }

// let filenames = ["users", "posts", "members", "tasks", "cards"]
// let models = [User, Post, Member, Task, Card]

// let filenames = ["projects.ok.ok"]
// let models = [Project]

// up(filenames, models).then(() => console.log("OK")).catch((e) => console.error(e))