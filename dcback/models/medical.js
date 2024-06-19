const  mongoose=require ('mongoose');
const {Schema}=mongoose
const medical_Schema = new Schema({
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

const medical=mongoose.model('medical',medical_Schema);
module.exports={medical}