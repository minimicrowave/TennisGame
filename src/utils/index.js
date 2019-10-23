function isNumber(value) {
	return typeof value === 'number' && !isNaN(value);
}

function arraySortByAscending(array) {
	return array.sort((a, b) => a - b);
}

module.exports = { isNumber, arraySortByAscending };
