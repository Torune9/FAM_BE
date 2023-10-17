const multer = require('multer')
const MAX_SIZE = 1000000

const fileFilter = (req,file,cb)=>{
    const allowTyped = ['application/pdf','image/png','image/jpg','image/jpeg']
    if (!allowTyped.includes(file.mimetype)) {
        const error = new Error("Not Allowed")
        error.code = "LIMIT_FILE_TYPES"
        return cb(error,false)
    }
    cb(null,true)
}
const upload = multer({
    dest : 'uploads/files',
    limits : {
        fileSize : MAX_SIZE
    },
    fileFilter,
})

const filter = (err,req,res,next)=>{
    if(err.code === "LIMIT_FILE_TYPES"){
        res.status(406).json({
           message : 'Not Allowed'
        })
    }
    if (err.code === "LIMIT_FILE_SIZE") {
        res.status(406).json({
           message :`File too large,max is 1mb `
        })
    }
}

module.exports = {filter,upload}