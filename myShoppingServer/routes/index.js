var express = require('express');
var router = express.Router();
const {product,signupFormDetails} = require('./routingCall/routeDetail');


router.get('/',product);

router.post('/signup',signupFormDetails);

module.exports = router;
