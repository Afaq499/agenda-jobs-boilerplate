import mongoose, { Schema } from "mongoose";

const user = new Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,
    }
})

const userModel = new mongoose.model('users', user)

export default userModel;