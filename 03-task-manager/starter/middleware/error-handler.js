const {customAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({msg:`Something went wrong, try again later.`})
    // return res.status(err.status).json({msg: err.message })

}



module.exports = errorHandlerMiddleware