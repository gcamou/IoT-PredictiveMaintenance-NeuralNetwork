import mongoose from 'mongoose';

import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('MongoDB is Connect!'))
    .catch(err => console.log("MongoDB Error: ", err));
