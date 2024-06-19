const connectDB = require('../databas');

async function getAllPlaces(req, res) {
    try {
        const client = await connectDB();
        const db = client.db('data_center'); // replace with your database name
        const collection = db.collection('Power_supp'); // replace with your collection name

        // Query to retrieve the voltage data
        const places = await collection.find({}).toArray();

        res.json(places);
    } catch (error) {
        console.error('Error retrieving places:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = getAllPlaces;
