const mongoose= require('mongoose')
const {Schema}=mongoose


const jail_schema=new Schema({
    VOL1: Number,
    VOL2: Number,
    VOL3: Number,
    AMP1: Number,
    AMP2: Number,
    AMP3: Number,
    MW: Number,
    PF: Number,
    Fre: Number,
});
 
const jail= mongoose.model('jail',jail_schema);
module.exports={jail}