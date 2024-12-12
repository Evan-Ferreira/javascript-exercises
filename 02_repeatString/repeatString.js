const repeatString = function () {
    if (n < 0) {
        throw new error();
    }
    let result = '';
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
