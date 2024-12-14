const findTheOldest = function (arr) {
    return arr.reduce((oldest, person) => {
        if (!person.yearOfDeath) {
            person.yearOfdeath = new Date().getFullYear();
        }
        const perAge = person.yearOfDeath - person.yearOfBirth;
        const oldAge = oldest.yearOfDeath - person.yearOfBirth;
        return oldAge < perAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
