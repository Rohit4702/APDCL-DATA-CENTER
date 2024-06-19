require('dotenv').config()
const connectDB= require('./databas')
const express= require('express')
var cors= require('cors')
const { PaltanBazar } = require('./models/paltanBazar');
const { sixmile } = require('./models/six_mile');
const { ulubari } = require('./models/ulubari');
const { fidder } = require('./models/fidder_data');
const {bamunimaidan}=require('./models/bamunimaidan')
const {jail}=require('./models/jail')
const {kalapahar}=require('./models/kalapahar')
const {medical}=require('./models/medical')
const {neharu_Stadium}=require('./models/neharu_stadium')



// const placeRoutes=require('./routes/place');
const { default: mongoose, Schema } = require('mongoose');
const app = express();
const router = express.Router();
const sch=new Schema({
    feeder:String,
    time:String,
    VOL1:Number,
    VOL2:Number,
    VOL3:Number,
    AMP1:Number,
    AMP2:Number,
    AMP3:Number,
    MW:Number,
    MVAR:Number,
    PF:Number,
    FREQUENCY:Number,
})
const data_center=mongoose.model("Medical",sch)



connectDB().then(()=>{
    app.listen(4000,()=>{
        console.log(`listin on port ${process.env.PORT} maybe`)
    }) 
}).catch((error)=>{
    console.log(error)
})

app.use(cors())

// var database;
// app.get('/api/',cors(), async (req, resp) => {
    // try {
        // const result = await data_center.find();
        // resp.json(result);
    // } catch (err) {
        // console.log(err);
        // resp.status(500).send('Internal Server Error');
    // }    
// });

// app.get('/api/p_bazar', async (req, res) => {
    // try {
        // const result = await PaltanBazar.find();
        // res.json(result);
    // } catch (err) {
        // console.log(err);
        // res.status(500).send('Internal Server Error');
    // }
// });


// app.get('/api/ulubari', async (req, res) => {
    // try {
        // const result = await ulubari.find();
        // res.json(result);
    // } catch (err) {
        // console.log(err);
        // res.status(500).send('Internal Server Error');
    // }
// });
// 
// app.get('/api/sixmile', async (req, res) => {
    // try {
        // const result = await sixmile.find();
        // res.json(result);
    // } catch (err) {
        // console.log(err);
        // res.status(500).send('Internal Server Error');
    // }
// });
// 
// app.get('/api/bamunimaidum',async(req,res)=>{
    // try{
        // const result = await  bamunimaidan.find();
        // res.json(result);
    // }
    // catch(err){
        // console.log(err);
        // res.status(500).send('internal Server error')
    // }
// });

// app.get('/api/jail', async (req, res) => {
    // try {
        // const result = await jail.find();
        // res.json(result);
    // } catch (err) {
        // console.log(err);
        // res.status(500).send('Internal Server Error');
    // }
// });
// 
// 
// app.get('/api/kalapahar', async (req, res) => {
    // try {
        // const result = await kalapahar.find();
        // res.json(result);
    // } catch (err) {
        // console.log(err);
        // res.status(500).send('Internal Server Error');
    // }
// });
// 
// 
// app.get('/api/medical', async (req, res) => {
    // try {
        // const result = await medical.find();
        // res.json(result);
    // } catch (err) {
        // console.log(err);
        // res.status(500).send('Internal Server Error');
    // }
// });
// 
// app.get('/api/neharuStadium', async (req, res) => {
    // try {
        // const result = await neharu_Stadium.find();
        // res.json(result);
    // } catch (err) {
        // console.log(err);
        // res.status(500).send('Internal Server Error');
    // }
// });
// 
// 
// 
// 
// 
app.get('/api/fidder/:placename', cors(), async (req, res) => {
    const placename=req.params.placename;
    try {
        const result = await fidder.find({feeder:placename});
        if (result) {
            
            res.json(result);
        }
        else{
            resp.status(404).send('place not found')
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});



app.get('/api/medical/:placename',cors(), async (req, resp) => {
    const placeName = req.params.placename;
    try {
        const result = await data_center.findOne({ feeder: placeName });
        if (result) {
            resp.json(result);
        } else {
            resp.status(404).send('Place not found');
        }
    } catch (err) {
        console.log(err);
        resp.status(500).send('Internal Server Error');
    }
});

