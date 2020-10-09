import express from 'express';
import controller from '../controllers/index';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Content Service Running on port 2311');
});

router.get('/userDetails', (req, res) => {
    controller.userDetails(req, res);
})

router.post('/userDetails', (req, res) => {
    controller.userDetails(req, res);
})

export default router;