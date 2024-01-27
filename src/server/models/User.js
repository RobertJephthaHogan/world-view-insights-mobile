const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter a firstName"]
        },
        lastOrBusinessName: {
            type: String,
            required: [true, "Please enter a lastOrBusinessName"]
        },
        email: {
            type: String,
            required: [true, "Please enter a email"]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"]
        },
        role: {
            type: String,
            required: [true, "Please enter a role"]
        },
    },
    {
        timestamps: true,
        collection: 'Product'
    }, 
)


const Product = mongoose.model('User', userSchema);

module.exports = Product;