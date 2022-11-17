import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB_URL)

const mongodb = mongoose.connection

export default mongodb