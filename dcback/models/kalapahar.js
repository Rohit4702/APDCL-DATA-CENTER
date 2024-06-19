const mongoose=require ('mongoose')
const {Schema}=mongoose

const kalapahar_Schema=new Schema({
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
const kalapahar=mongoose.model('kalapahar',kalapahar_Schema)
module.exports={kalapahar}