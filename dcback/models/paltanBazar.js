const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define schema for the power supply collection
const p_bazar = new Schema({
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

const PaltanBazar = mongoose.model('PaltanBazar', p_bazar);
module.exports = { PaltanBazar };