const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log("router loeaded");

// get task list
router.get('/', homeController.home);

// post task
router.post('/add', homeController.add);

router.get('/delete', homeController.delete);

// export router
module.exports = router
