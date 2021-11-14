
'use strict';
var express = require('express');
var router = express.Router();
const LogicProduct= require('../model/javascript/logic/LogicProduct').default;
const DTOProduct= require('../model/javascript/shared/DTO/DTOProduct').default;


router.options('/', function (req, res) {
    res.send(200);
});

router.post('/registerProduct', async function (req, res) {
    try {
        let token=req.body.token;
        var dtoproduct = new DTOProduct(req.body.name,req.body.category,req.body.price,req.body.imgurl);
        var addproduct=await LogicProduct.getInstance().registerProduct(dtoproduct,token);
        res.send(addproduct);

    } 
     catch(error)
    {
        res.status(400).send(error.toString());
    }
   
});

module.exports = router;