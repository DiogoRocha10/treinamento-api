const joi = require('joi');

var productSchema = {
    create: joi.object().keys({
        name: joi.string().trim().required(),
        valueUnitary: joi.number().integer().required(),
        amount: joi.number().integer().required()
    })
};
module.exports = () => (productSchema);