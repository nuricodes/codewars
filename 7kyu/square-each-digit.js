// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.



///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////

function squareDigits(num) {
    let arr = String(num).split('').map(a => a * a).join('');
    return +arr
}

///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////

function squareDigits(num) {
    return Number(('' + num).split('').map(n => n * n).join(''))
}


///////////////////////////////////////////////////////////////
// SECTION 3
///////////////////////////////////////////////////////////////

function squareDigits(num) {
    let str = num.toString()
    let results = [];
    for (let i = 0; i < str.length; i++) {
        results[i] = str[i] * str[i]
    }
    return results.join('')
}