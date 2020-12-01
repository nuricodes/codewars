// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return arr.reduce((sum, n) => n > 0 ? n + sum : sum, 0)
}

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

// function positiveSum(arr) {
//     let sum = 0;                                   //where we will store sum of the arrays
//     for (let i = 0; i < arr.length; i++) {         //loop through the length of the array
//         if (arr[i] > 0) {                               //if the index of the array is greater than 0 (not negtative)
//             sum += arr[i]                          //add it to the sum variable
//         }
//     }
//     return sum                                     //return
// }

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

// function positiveSum(arr) {
//     return arr.filter(n => n > 0).reduce((sum, n) => n + sum, 0)
// }

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

// function positiveSum(arr) {
//     return arr.reduce((sum, n) => n > 0 ? n + sum : sum, 0)
// }