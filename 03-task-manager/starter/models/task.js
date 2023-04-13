const mongoose = require('mongoose')


// const TaskSchema = new mongoose.Schema({
//     name:String,
//     completed:Boolean
// })

// Only the properties set in schema will be passed on to the database, rest will be ignored

// Validation is needed when there are no properties set by the user and the post request is accepted it creates a empty record in database

// We can use built in validators

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true                 for directly throwing error
        required:[true,'Must Provide Name'],    // For throwing an custom error message
        trim:true,                              // trims the string for extra spaces in beginning or end
        maxlength:[20, 'Name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema)