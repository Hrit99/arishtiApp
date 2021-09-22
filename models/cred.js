const mongoose = require('mongoose')
const schema = mongoose.Schema 

const credSchema = new schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
}, {timestamps:true})


const cred = mongoose.model('creds', credSchema)
module.exports = cred