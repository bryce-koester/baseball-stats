const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { response } = require('express');
const samplePlayers = require('./sampleData/players.json')

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get('/getData', cors(corsOptions), async (req, res) => {
    res.json(samplePlayers)
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
