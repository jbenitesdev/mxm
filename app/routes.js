const express = require('express');
const router = new express.Router;
const User = require('./controller/user/user');

router.get('/',(req,res)=>res.send('ok'));
// user routes
router.post('/user/create',User.create);
// router.post('/user/createAuth',User.createAuth)

router.get('/user',User.find);


module.exports = router;