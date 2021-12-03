var productController = require('../controllers/product.js');
var express = require('express');
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  
    try{
      console.log(req.query.q);
      const products = productController.getProducts(req.query.q);
      res.json(products);
    }catch(err){
      res.json({message:err});
  }
    
});

module.exports = router;
