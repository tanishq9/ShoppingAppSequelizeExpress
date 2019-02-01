const router = require('express').Router();

router.use('/users',require('../api/users'));
router.use('/products',require('../api/products'));

module.exports = router ;
