
exports.min = function min (array) {
    return (array || []).reduce((a, b)=> a < b ? a : b, 0);
}

exports.max = function max (array) {
    return (array || []).reduce((a, b) => a > b ? a : b, 0);
}

exports.avg = function avg (array) {
    if (typeof(array) === "undefined" || array.length === 0) {
        return 0
    }
    return array.reduce((a, b) => a + b,  0) / array.length;
}
