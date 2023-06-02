require('./models/Users');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

//to parse json info from frontend
//when it parses, it sends the json to rec.body in authroutes
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

//mongodb connection
const mongoUri = 'mongodb+srv://siddharthkothari:Siddhu*kothari04@mapcluster.zvxycge.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

//when someone makes a get request to the root directory, we want to run this function
app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

//run using node src/index.js