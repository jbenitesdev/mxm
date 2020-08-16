const express = require('express');
const router = new express.Router;
const User = require('./controller/user/user');

router.get('/',(req,res)=>res.send('ok'));
// user routes
router.post('/user/create',User.create);


module.exports = router;