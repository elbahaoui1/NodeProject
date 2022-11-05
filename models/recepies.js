const mongoose = require('mongoose');
const { stringify } = require('qs');
const recepiesSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true 
    },
    details: {
        type: String ,
        require: true 
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String ,
        require: true
    },
});
module.exports = mongoose.model("recepies",recepiesSchema)