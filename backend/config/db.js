const mongoose = require(`mongoose`)

const connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGOOSE_URI)
        console.log(`Database connected on ${connect.connection.host}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

module.exports = connection