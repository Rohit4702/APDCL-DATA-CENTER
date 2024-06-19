const mongoose =require ('mongoose');
const {Schema}=mongoose;

const fder=new Schema({
    place_name:String,
    fidder_Status:Boolean
});

const fidder=mongoose.model('fidder_data',fder);
module.exports={fidder};


