const mongoose = require('mongoose');
// var NumberInt = require('mongoose-int32');
let bSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    arrival:String,
    day:Number,
    train_name:String,
    station_name:String,
    station_code:String,
    id:Number,
    train_number:String,
    departure:String


},{collection: 'b'});



module.exports=mongoose.model('b',bSchema)