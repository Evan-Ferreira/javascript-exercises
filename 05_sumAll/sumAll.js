const sumAll = function (n1, n2) {
    if (n1 < 0 || n2 < 0) {
        throw new Error();
    }
    let result = n1;
    n1++;
    for (n1; n1 <= n2; n1++) {
        result += n1;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
