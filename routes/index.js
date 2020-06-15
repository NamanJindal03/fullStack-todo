const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

//middleware for adding and removing tasak in the todo
router.use('/task', require('./task'));
module.exports = router;