const mongoose=require('mongoose')
const {Schema}=mongoose;

const Bamunimaidan_schema=new Schema({
    VOL1: Number,
    VOL2: Number,
    VOL3: Number,
    AMP1: Number,
    AMP2: Number,
    AMP3: Number,
    MW: Number,
    PF: Number,
    Fre: Number,
})

const bamunimaidan=mongoose.model('bamunimaidan',Bamunimaidan_schema);
module.exports={bamunimaidan};