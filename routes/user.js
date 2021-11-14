
'use strict';
var express = require('express');
var router = express.Router();
const LogicUser= require('../model/javascript/logic/LogicUser').default;
const DTOUser= require('../model/javascript/shared/DTO/DTOUser').default;


router.options('/', function (req, res) {
    res.send(200);
});
router.post('/registerUser', async function (req, res) {
    try {

        var dtouser = new DTOUser(req.body.idcard,req.body.username,
            req.body.email,req.body.typeuser,"",req.body.password);
        var adduser=await LogicUser.getInstance().registerUser(dtouser);
        res.send(adduser);

    } 
     catch(error)
    {
        res.status(400).send(error.toString());
    }
   
});

// SIGN_IN

router.post('/signin', async function (req, res) {
    try {
       let signIn=await LogicUser.getInstance().signIn(req.body.idcard,req.body.password); 
        res.send(signIn);

    } 
     catch(error)
    {
        res.status(400).send(error.toString());
    }
   
});

router.get('/getlogin', async function (req, res) {
    try {
       let userlogin= LogicUser.getInstance().userlogin; 
        res.send(userlogin);

    } 
     catch(error)
    {
        res.status(400).send(error.toString());
    }
   
});

router.post('/logout', async function (req, res) {
    try {
       let logout= LogicUser.getInstance().logout(); 
        res.send(logout);

    } 
     catch(error)
    {
        res.status(400).send(error.toString());
    }
   
});
module.exports = router;