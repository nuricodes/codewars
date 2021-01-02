// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////

function XO(str) {
    let x = 0;
    let o = 0;
    str = str.toLowerCase()
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === 'x') {
            x++
        } else if (str[i] === 'o') {
            o++
        }

    }
    return x === o
}

///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////
function XO(str) {
    let x = 0;
    let o = 0;
    str = str.toLowerCase()
    for (let char of str) {
        if (char === 'x') {
            x++
        } else if (char === 'o') {
            o++
        }

    }
    return x === o
}


///////////////////////////////////////////////////////////////
// SECTION 3
///////////////////////////////////////////////////////////////

function XO(str) {
    str = str.toLowerCase().split('')
    return str.filter(n => n === 'x').length === str.filter(n => n === 'o').length
}

///////////////////////////////////////////////////////////////
// SECTION 4
///////////////////////////////////////////////////////////////

function XO(str) {
    return str.toLowerCase().split('o').length === str.toLowerCase().split('x').length
}