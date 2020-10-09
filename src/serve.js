import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import indexRouter from './routers/index';
import dbConnect from './config/dbConfig';

const app = express();
const port = 2311;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/', indexRouter);

/* jshint ignore:start */
let startPort = async () => {
    try {
        await app.listen(port);
        console.log(`app listening to the port ${port}`)
    } catch (e) {
        process.exit(1);
    }
}

startPort();
dbConnect();

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(200).json({  status: 200, message: 'The request body contains Invalid JSON.' });
    }
});