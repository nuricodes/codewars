// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function countPositivesSumNegatives(input) {
    if (0 || null) {
        return null;
    }
    let p = 0;
    let n = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            p++
        } else {
            n += input[i]
        }
    }
    return [p, n]
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}



