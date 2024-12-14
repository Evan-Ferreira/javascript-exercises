const palindromes = function (a) {
    i = 0;
    j = a.length - 1;
    while (i < j) {
        if (a[i] != a[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
