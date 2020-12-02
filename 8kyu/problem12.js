// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////
var summation = function (n) {
    //variable to store result
    let result = 0;
    //loop through all numbers between 1-n
    for (let i = 1; i <= n; i++) {
        //add this iteration to the results var
        result += i
    }
    // return
    return result;
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////
var summation = function (n) {
    return n * (n + 1) / 2        //summation equation
}


