// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function removeChar(str) {
    let arr = str.split('')         //turn str in to arr
    arr.shift()             // shift the first 
    arr.pop()               // and pop the last
    return arr.join('')    //turn back in to string

};

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function removeChar(str) {
    return str.slice(1, -1)   //creates new string includes the index 1 and excludes -1 index
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

const removeChar = str => str.slice(1)