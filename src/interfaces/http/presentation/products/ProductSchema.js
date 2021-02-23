const joi = require('@hapi/joi');

module.exports = () => ({
    create: joi.object().keys({
        name: joi.string().required(),
        valueUnitary: joi.string().required(),
        amount: joi.string().required()
    }),
    getProductId: joi.object().keys({id:joi.object().required()}),

});