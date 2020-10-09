import userModel from '../models/users';
import config from '../config/index';
import utilController from '../utils/index';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;
// new ObjectId(req.query.userId)
// if (ObjectId.isValid(req.query.userId))

const services = {
    getUserDetails: async (req, res) => {
        try {
            const userDetails = await userModel.find({userId: Number(req.query.userId)});
            return res.status(config.SuccessCode).json(utilController.successMessage(userDetails));
        } catch (e) {
            console.log("e", e);
            return res.status(config.internalServerError.code)
                .json(utilController.internalServerError(e));
        }
    },

    getAllUserDetails: async (req, res) => {
        try {
            const userDetails = await userModel.find();
            return res.status(config.SuccessCode).json(utilController.successMessage(userDetails));
        } catch (e) {
            return res.status(config.internalServerError.code)
                .json(utilController.internalServerError(e));
        }
    },

    saveUserDetails: async (req, res) => {
        try {
            const latestUserId = await userModel.findOne().sort({_id: -1}).select('userId');
            console.log("result", latestUserId);
            if (latestUserId._doc) {
                req.body.userId = latestUserId._doc.userId+1;
            } else {
                req.body.userId = 1;
            }
            const user = new userModel(req.body);
            const userData = await user.save();
            const result = {
                userId: userData._id,
                message: 'New user added successfully'
            };
            return res.status(config.SuccessCode).json(utilController.successMessage(result));
        } catch (e) {
            return res.status(config.internalServerError.code)
                .json(utilController.internalServerError(e));
        }
    }
}

export default services;