import * as admin from 'firebase-admin';

const serviceAccount = require("./key.json");

// Initialize our project application
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://predictive-collector-api-66f55.firebaseio.com"
});

// Set up database connection
export const db = admin.database();