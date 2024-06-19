const mongoose=require ('mongoose')
const {Schema}=mongoose

const neharu_stadium_Schema = new Schema({
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

const neharu_stadium= mongoose.model('neharu_Stadium',neharu_stadium_Schema);
module.exports={neharu_stadium}