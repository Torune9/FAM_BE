const multer = require('multer')
const MAX_SIZE = 1000000
const path = require('path')
const randomize = require('randomatic')

const attachmentsFilter = (req,file,cb)=>{
    const allowTyped = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.template'
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

const uploads = multer({
  storage : storage,
  limits : {
    fileSize : MAX_SIZE
  },
  filesFilter : attachmentsFilter,
})
const filters = (err,req,res,next)=>{

    if(err.code === "LIMIT_FILE_TYPES"){
        console.log(err.code);
        res.status(406).json({
           message : 'Only .doc or .pdf can allowed '
        })
    }
    if (err.code === "LIMIT_FILE_SIZE") {
        console.log(err.code);
        res.status(406).json({
           message :`File too large,max is ${MAX_SIZE / 1000000}mb `
        })
    }
}
module.exports = {filters,uploads}