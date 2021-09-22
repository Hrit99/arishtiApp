const mongoose = require('mongoose')
const schema = mongoose.Schema 

const userSchema = new schema({
    name: {
        type: String
    },
    contact: {
        type: String
    },
    address: {
        type: String
    },
}, {timestamps:true})


const user = mongoose.model('details', userSchema)
module.exports = user