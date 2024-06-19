const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define schema for the power supply collection
const six_mile_Schema = new Schema({
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

const sixmile = mongoose.model('six_mile_data', six_mile_Schema);

module.exports = { sixmile };