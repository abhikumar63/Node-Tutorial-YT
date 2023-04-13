const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose.connect(url, {
        'useNewUrlParser':true,
        'useCreateIndex':true,
        'useFindAndModify':false,
        'useUnifiedTopology':true
    })
}

module.exports = connectDB

// In this method the server was starting first and then connecting to DB, this causes probelem
// By the above method this beccomes corrected

// connectionString = 'mongodb+srv://Abhishek:FJmVx5guz5TATqNs@nodeexpressprojects.bxnvlzl.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

// mongoose.connect(connectionString, {
//     'useNewUrlParser':true,
//     'useCreateIndex':true,
//     'useFindAndModify':false,
//     'useUnifiedTopology':true
// }).then(() => console.log('CONNECTED TO THE DB...')).catch(() => console.log(err))