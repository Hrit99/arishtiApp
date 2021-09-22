const user = require('../models/user')

const index = (req, res, next) => {

    user.find()
        .then(response => {
            console.log("jj")
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'an error occured'
            })
        })
}
module.exports = {
    index
}
