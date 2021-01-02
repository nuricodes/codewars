// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))

}
///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////  
function descendingOrder(n) {
    return +(String(n).split('').sort().reverse().join(''))


}
///////////////////////////////////////////////////////////////
// SECTION 3
///////////////////////////////////////////////////////////////  

function descendingOrder(n) {
    n = n.toString().split('')
    let num = n.map(n => Number(n))
    return +(num.sort((a, b) => b - a)).join('')
}

