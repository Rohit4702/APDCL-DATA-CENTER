const express = require('express')
const router = express.Router();

// const getAllPlaces= require("../controller/placeController")
var  database
app.get('/api/places', async (req, resp) => {
    try {
        const result = await data_center.find();
        resp.json(result);
    } catch (err) {
        console.log(err);
        resp.status(500).send('Internal Server Error')
    }
});


module.exports=router;
