import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

import indexRoute from './routes'; 

// Initializations
const app = express();
import './database';

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),  
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs')

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