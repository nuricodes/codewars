// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function makeNegative(num) {
    return -Math.abs(num);          //will always return negative
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function makeNegative(num) {
    return num < 0 ? num : -num;
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

function makeNegative(num) {
    if (num < 0) {
        return num;
    } else {
        return -num;
    }
}
