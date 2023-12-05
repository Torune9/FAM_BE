const multer = require('multer')
const MAX_SIZE = 1000000
const path = require('path')
const randomize = require('randomatic')

const imageFilter = (req,file,cb)=>{
    const allowTyped = [
      'image/png',
      'image/jpg',
      'image/jpeg',
    ]
  
    if (!allowTyped.includes(file.mimetype)) {
        const error = new Error("Not Allowed")
        error.code = "LIMIT_FILE_TYPES"
        return cb(error,false)
    }
    cb(null,true)
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      cb(null, `uploads-${randomize('0',8)}` + path.extname(file.originalname));
    }
  });
  

  const filter = (err,req,res,next)=>{

    if(err.code === "LIMIT_FILE_TYPES"){
        console.log(err.code);
        res.status(406).json({
           message : 'Only images can allowed '
        })
    }
    if (err.code === "LIMIT_FILE_SIZE") {
        console.log(err.code);
        res.status(406).json({
           message :`File too large,max is 1mb `
        })
    }
  }

  const upload = multer({
    storage : storage,
    limits : {
      fileSize : MAX_SIZE
    },
    fileFilter : imageFilter,
  })

  module.exports = { upload,filter}
  