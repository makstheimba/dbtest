const errorTexts = require('../../constants/errors');
class InternalError extends Error {
    constructor(message) {
        super();
        this.status = 500;
        this.message = message || errorTexts.INTERNAL_ERROR;
    }
}


module.exports = InternalError;