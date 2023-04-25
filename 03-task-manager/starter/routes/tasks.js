const express = require('express')
const router = express.Router()

const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

// put replaces the existing resource/items
// patch is for partial update

module.exports = router