const uuidv4 = require('uuid/v4');

module.exports = () => ({

    toFactoryTransaction(userData, transactionData) {

        transactionData.user_id = userData.user_id;
        transactionData.role_user = userData.role;
        transactionData.payment_id = uuidv4();

        return transactionData;

    }

});