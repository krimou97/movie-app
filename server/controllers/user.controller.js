const User = require('../shemas/user')

module.exports.REGISTER = (req, res) => {
    const user = new User(req.body)
    user.save()
    .then(ok => {
        res.send('OK')})
    .catch(er => {
        res.send('ERR')
    })    
}

module.exports.LOGIN = async (req, res) => {
    console.log(req.body)
    if(!req.body.email) {
        return res.send({error:true, msg:'Email required'})
    }
    if(!req.body.password){
        return res.send({error:true,msg:'Password required'})
    }

    const user= await User.findOne({email:req.body.email}).exec()
    if(!user) return res.send({error: true, msg: 'email invalid'})
    if(user.password !== req.body.password) return res.send({error: true, msg:'password invalid'})
    res.send({error: false, msg:'OK'})
}

module.exports.ALLUSERS= (req, res) => {
    User.find()
        .then(users => {
            res.send(users)
        })

        .catch(err => {
            res.send('ERR')
        })
}








