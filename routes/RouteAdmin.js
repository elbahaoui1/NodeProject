const express = require('express');
const router = express.Router();
const recepies = require('../models/recepies')
const multer = require('multer');


const Filestorage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null, "./uploads");
    },
    filename : (req, file ,cb) => {
        cb(null, Date.now()+"--"+file.originalname );
    },
});

var upload = multer({
    Storage: Filestorage,
});

router.get("/admin",(req,res)=> {
    res.render("admin")
})
router.get("/addRecepie",(req,res)=> {
    res.render("addRecepie")
})

router.post("/add",upload.single('file'),(req,res)=> {
    console.log(req.file);
    const Recepies = new recepies({
        name: req.body.name,
        price: req.body.price,
        details: req.body.details,
        file: req.file.filename,
    });
    Recepies.save((err) => {
        if(err){
            res.json({message: err.message, type: 'danger'})
        }else{
            req.session.message = {
                type: 'success',
                message: 'Recepie added successfully'
            };
            res.redirect('/admin')
        }
    });
})

module.exports = router;