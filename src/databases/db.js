import mongoose from 'mongoose'

async function connect(mongoUrl = "") {
    try {
        await mongoose.connect(mongoUrl)
    } catch (e) {
        console.error(`[Error] ${e.message}`)
    }
}

export default connect