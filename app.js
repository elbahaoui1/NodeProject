
const express = require("express")
require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");



const app = express()
const PORT = process.env.PORT || 4000;


app.set("view engine", "ejs")

app.use(express.static(__dirname + '/public'));


//Connection 
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', (error) => console.log('error'));
db.once('open', (error) => console.log('Successful'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    session({
        secret: "my secret key",
        saveUninitialized: true,
        resave: false

    })
);



app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
    
});

    

//Router user 
app.use("",require("./routes/RouterUser"));

//Router Admin 
app.use("",require("./routes/RouteAdmin"));







app.listen(3000)