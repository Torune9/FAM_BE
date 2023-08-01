const {Admin,User} = require('../models')

const LoginController = async (req,res)=>{ 
    try{
        const data = await User.findAll()
        const {username,password} = req.body
        const authUser = data.find(data => data.username == username && data.password == password)
        if(authUser){
            res.json({
                        "message" : "Login berhasil"
                    })
                }else{
                    res.json({
                        "message" : "Gagal Login"
                    })
                }
    }catch(err){
        console.log(err);
    }
}

module.exports = {LoginController}