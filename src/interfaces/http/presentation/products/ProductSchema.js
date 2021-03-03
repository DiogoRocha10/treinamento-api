const joi = require('joi');

var productSchema = {
    create: joi.object().keys({
        name: joi.string().trim().required(),
        valueUnitary: joi.string().trim().required(),
        amount: joi.string().trim().required()
    })
};
module.exports = () => (productSchema);