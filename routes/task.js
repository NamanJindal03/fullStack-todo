const express = require('express');
const router = express.Router();
const taskController = require("../controllers/task_controller");

router.post('/add-task', taskController.add);
router.post('/delete-task', taskController.delete);

module.exports = router;