const user = require('../models/user')
const { request } = require('express');
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

function storeDetails(req, res, validationResult) {
    console.log(req.body.contact)
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      console.log(req.body.name)
      let newUser = new user({
         name: req.body.name,
         contact: req.body.contact,
         address: req.body.address
      })
  
      newUser.save()
          .then(response => {
              res.json({
                  stored: true
              })
          })
          .catch(error => {
              res.json({
                  stored: false
              })
          })
    // user.find()
    //     .then(response => {
    //         console.log("jj")
    //         res.json({
    //             response
    //         })
    //     })
    //     .catch(error => {
    //         res.json({
    //             message: 'an error occured'
    //         })
    //     })
}
module.exports = {
    index, storeDetails
}
