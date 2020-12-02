// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

var stringToNumber = function (str) {
    return +str;
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

var stringToNumber = function (str) {
    return parseInt(str)
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

var stringToNumber = function (str) {
    return parseFloat(str)
}

/////////////////////////////////////////////
// SOLUTION 4
/////////////////////////////////////////////

var stringToNumber = function (str) {
    return Number(str)
}