const cred = require('../models/cred')
const { request, response } = require('express');

function login(req, res)  {
    let un = req.body.username
    let pw = req.body.password
    console.log("hello");
    cred.find({ username: un, password: pw })
        .then(response => {
            res.json({
                logedin: true
            })
        })
        .catch(error => {
            res.json({
                logedin: false
            })
        })
}

function signup(req, res, validationResult) {
    let un = req.body.username
    let pw = req.body.password
    console.log(req.body.contact)
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      console.log(req.body.name)
      let newCred = new cred({
         username: req.body.username,
         password: req.body.password,
      })

      cred.findOne({ username: un}).then(
          response => {
              if(response == null){
                newCred.save()
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
              }
              else{
                res.json({
                    message: 'an error occured'
                })
              }
          }
      )
    //   newCred.save()
    //       .then(response => {
    //           res.json({
    //               stored: true
    //           })
    //       })
    //       .catch(error => {
    //           res.json({
    //               stored: false
    //           })
    //       })
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
    login, signup
}
