// Imports
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path')
const patientRoutes = require('./src/patient/routes');
const userRoutes = require('./src/user/users-routes');
const practicienRoutes = require('./src/practicien/practicien_routes');

dotenv.config();
// Instantiate server
const app = express();



//middleware CORS
app.use(cors());

// Initialize port
const port = 3000;


//middleware JSON
app.use(express.json());
app.use(cookieParser());

// Configure routes
app.get('/',  (req, res) => {
    res.send('Bonjour sur mon serveur');
});

app.use('/', express.static(path.join(__dirname, 'public')))
app.use("/patients", patientRoutes);
app.use("/users", userRoutes);
app.use("/practiciens", practicienRoutes);


// Launch server
app.listen(port, () => console.log(`app is listening on port ${port}`));


