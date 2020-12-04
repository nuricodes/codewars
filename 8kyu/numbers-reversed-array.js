// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function digitize(n) {
    return n.toString().split('').reverse().map(arr => parseInt(arr))
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function digitize(n) {
    return String(n).split('').map(Number).reverse();
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

function digitize(n) {
    return Array.from(String(n), Number).reverse(); //makes array with string of n, Number converts to num
}
