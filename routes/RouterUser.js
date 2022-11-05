const express = require('express');
const router = express.Router();

router.get("/about.html", (req,res) => {
    res.render('about')
})

router.get("/booking.html", (req,res) => {
    res.render('booking')
})

router.get("/contact.html", (req,res) => {
    res.render('contact')
})

router.get("/menu.html", (req,res) => {
    res.render('menu')
})

router.get("/service.html", (req,res) => {
    res.render('service')
})

router.get("/team.html", (req,res) => {
    res.render('team')
})
router.get("/index.html", (req,res) => {
    res.render('index')
})

router.get("/", (req,res) => {
    res.render('index')
})


module.exports = router;


