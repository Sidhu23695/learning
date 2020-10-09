import mongoose from 'mongoose';
import config from '../config/index';

const dbConnect = () => {
    mongoose.connect(config.mongoDbURL, {useNewUrlParser: true});
    var dbTest = mongoose.connection;
    dbTest.on('error', console.error.bind(console, 'connection error:'));
    dbTest.once('open', function() {
        console.log("Connected to Database");
    });
}

export default dbConnect;