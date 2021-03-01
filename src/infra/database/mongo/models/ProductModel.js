'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate');
const autoincrement =require('simple-mongoose-autoincrement');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const productSchema = new Schema({
        id: {type: Number, required: true},
        name: {type: String, required: true},
        valueUnitary: {type: String, required: true},
        amount: {type: String, required: true}
    }, 
    {​​ versionKey: false, timestamps: true }​​);

    productSchema.plugin(paginate);

    productSchema.plugin(autoincrement, {​​field: 'id'}​​);

    return connection.model('product', productSchema);
};




