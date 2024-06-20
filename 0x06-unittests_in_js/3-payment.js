const Utils = require('./utils');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
    const utilsInstance = new Utils();
    const total = utilsInstance.calculateNumber(totalAmount, totalShipping, 'SUM');
    console.log('The total is: ' + total);
}

module.exports = sendPaymentRequestToApi;
