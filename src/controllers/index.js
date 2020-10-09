import Joi from 'joi';
import services from '../services/index';
import utilController from '../utils/index'
import config from '../config/index';
import { getUserDetailsSchema, saveUserDetailsSchema } from '../models/joiSchema';

const controller = {
    userDetails: async (req, res) => {
        try {
            if (req.method === 'POST') {
                const joiValidation = await Joi.validate(req.body, saveUserDetailsSchema);
                    if (joiValidation) {
                        services.saveUserDetails(req, res);
                    }
            } else {
                if (req.query.userId) {
                    const joiValidation = await Joi.validate(req.query, getUserDetailsSchema);
                    if (joiValidation) {
                        services.getUserDetails(req, res);
                    }
                }  else {
                    services.getAllUserDetails(req, res);
                }
            }
        } catch (e) {
            if (e.isJoi) {
                return res.status(config.badRequest.code)
                    .json(utilController.requestIsNull());
            }
            return res.status(config.internalServerError.code)
                .json(utilController.internalServerError(e));
        }
    }
}

export default controller;