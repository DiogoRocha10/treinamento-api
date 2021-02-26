const joi = require('@hapi/joi');

var productSchema = {
    create: joi.object().keys({
        name: joi.string().trim().required(),
        valueUnitary: joi.string().trim().required(),
        amount: joi.string().trim().required()
    }),
    getProductId: joi.object().keys({
        id:joi.object().required()
    }),
};
module.exports = () => (productSchema);