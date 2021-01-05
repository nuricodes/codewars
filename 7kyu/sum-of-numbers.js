// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////
function getSum(a, b) {
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    let result = 0;
    for (let i = min; i <= max; i++) {
        result += i
    }
    return result
}

