const mongoose = require("mongoose");

const schema=new mongoose.Schema({
    email:String,
    password:String,
})

const collection = mongoose.model('infos',schema)