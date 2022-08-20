const router  = require('express').Router();
const {$where} =  require('../models/UserModel')
let UserModel = require('../models/UserModel');

router.route('/').get((req,res) =>{
    UserModel.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error'+err));
});


router.route('/create').post(function (req, res) {
    const user = new UserModel(req.body);
    user.save()
      .then(user => {
        res.json('User added successfully');
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });

module.exports = router;