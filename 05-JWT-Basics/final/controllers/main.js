


const login = (req,res) => {
    const {username,password} = req.body
    console.log(username,password);

    if(!username || !password){
        
    }
    res.send('Fake login/register/signup')
}

const dashboard = (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, John Doe`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}


module.exports = {
    login,
    dashboard
}