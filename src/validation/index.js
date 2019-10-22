const { isNumber } = require('../utils/numUtils');

function validateScore(score) {
	if (!isNumber(score)) throw new TypeError(`Score "${score}" is not a number.`);
}

module.exports = { validateScore };
