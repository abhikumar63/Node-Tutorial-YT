const Task = require('../models/task')
const asyncWrapper = require('../middleware/not-found')
const {createCustomError} = require('../errors/custom-error')

// const getAllTasks = async (req,res) => {
//     try {
//         const tasks = await Task.find({})
//         res.status(200).json({ tasks })
//         // res.status(200).json({ tasks, amount:tasks.length})
//         // res.status(200).json({ success: true, data: {tasks, nbHits: tasks.length}})
//         // res.status(200).json({ status: "success", data: {tasks, nbHits: tasks.length}})
//         // We have to change other methods accordingly and the frontend also needs to be updated in order to work properly

//     } catch (error) {
//         res.status(500).json({msg:error})
//     }
// }

const getAllTasks = asyncWrapper(async (req,res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncWrapper(async(req,res,next) => {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return next(createCustomError(`No task with id : ${taskID}`,404))
        // const error = new Error('Not Found')
        // error.status = 404 
        // return next(error)
        // return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({ task })
})


const deleteTask = asyncWrapper(async (req,res) => {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
        // return res.send(404).json({msg:`No task with id : ${taskID}`})
        return next(createCustomError(`No task with id : ${taskID}`,404))
    }
    res.status(200).json({ task })  
    // res.status(200).send()
    // res.status(200).json({ task: null, status: 'success' }) 
})

const updateTask = asyncWrapper(async(req,res) => {
    const {id:taskID} = req.params

    const task = await Task.findByIdAndUpdate({_id:taskID},req.body, {
        new:true, 
        runValidators:true
    })
    if(!task){
        // return res.send(404).json({msg:`No task with id : ${taskID}`})
        return next(createCustomError(`No task with id : ${taskID}`,404))
    }
    res.status(200).json({ task })
})


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}