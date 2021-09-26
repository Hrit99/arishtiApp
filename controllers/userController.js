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

const deleteit = (req, res, next) => {

    user.findById(req.body.id).remove().then(response => {
        console.log("jj")
        res.json({
            deleted: true
        })
    })
    .catch(error => {
        res.json({
            deleted: false
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
      var id = " ";
      console.log("jnfd");
      newUser.save(function(err,usr) {
          if(err)
          {
              console.log(err);
              res.json({
                stored: false
            })
          }
          else{
        console.log(usr.id);
        id = usr.id;
        res.json({
            stored: true,
            id: id
        })
          }

     });

        //   .then(response => {
            //   res.json({
            //       stored: true,
            //       id: id
            //   })
        //   })
        //   .catch(error => {
            //   res.json({
            //       stored: false
            //   })
        //   })
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
    index, storeDetails, deleteit
}
