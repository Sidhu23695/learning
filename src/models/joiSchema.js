import Joi from 'joi';

export const getUserDetailsSchema = Joi.object().keys({
    userId: Joi.string().required()
}).pattern(/./, Joi.any());

export const saveUserDetailsSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
    addressLine: Joi.string().required(),
    addressLine2: Joi.string().required(),
    city: Joi.string().required(),
    district: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    pinCode: Joi.number().required()
}).pattern(/./, Joi.any());