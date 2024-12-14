const fibonacci = function (s) {
    if (s === 0) {
        return 0;
    } else if (s === 1) {
        return 1;
    } else {
        return fibonacci(s - 1) + fibonacci(s - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
