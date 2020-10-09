import config from '../config/index'

const utils = {
    internalServerError: (error) => {
        return {
            "Success": false,
            "Message": config.internalServerError.message,
            "Error": error
        };
    },

    successMessage: (result) => {
        return {
            "Success": true,
            "Result": result
        }
    },

    errorMessage: (message) => {
        return {
            "Success": false,
            "Message": message
        }
    },

    requestIsNull: () => {
        return {
            "Success": false,
            "Message": config.badRequest.message
        };
    }
}

export default utils;