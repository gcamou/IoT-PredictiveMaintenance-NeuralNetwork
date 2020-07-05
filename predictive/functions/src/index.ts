import * as functions from 'firebase-functions';
import * as express from 'express';
import * as path from 'path';

import indexRoute from './routes'; 


// Initializations
const app = express();
import './database';

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routers
app.use('/asset', indexRoute);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

exports.app = functions.https.onRequest(app);