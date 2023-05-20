var express = require('express');
const { getAllTask, deleteTask, createTask } = require('../controllers/taskController');


var router = express.Router();

router.route('/tasks').get(getAllTask)
router.route('/create-task').post(createTask)
router.route('/tasks/:taskId/delete').delete(deleteTask)

module.exports = router;