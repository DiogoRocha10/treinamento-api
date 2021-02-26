'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const productSchema = new Schema({
        name: {type: String, required: true},
        valueUnitary: {type: String, required: true},
        amount: {type: String, required: true}
    }, 
    { versionKey: true });

    productSchema.plugin(paginate);

    productSchema.index({ id: false }, { unique: true });

    return connection.model('product', productSchema);
};
