import express from 'express'
import http from 'http'
import connect from './src/databases/db.js'
import router from './src/routers/router.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(router)

const server = http.createServer(app)


server.listen(3000, () => {
    connect(process.env.MONGO_URL)
    console.log(`listen on http://localhost:3000`)
})