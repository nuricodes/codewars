// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Solution 4
function longest(s1, s2) {
    let output = [];
    let newString = s1.concat(s2).split('').sort();

    for (let i = 0; i < newString.length; i++) {
        if (!output.includes(newString[i])) {
            output.push(newString[i])
        }
    }
    return output.join('')
}

// Solution 3
const longest = (s1, s2) => Array.from(new Set(s1 + s2)).sort().join("")

// Solution 2
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("")


// Solution 1
function longest(s1, s2) {
    let joined = [...s1, ...s2];
    let charMap = {};
    let distStr = '';
    for (let char of joined) {
        charMap[char] ? charMap[char]++ : charMap[char] = 1
    }


    for (let char in charMap) {
        if (charMap[char] >= 1) {
            distStr += char
        }
    }
    return distStr.split("").sort().join("")
}

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    //if sqrt !have a remainder of 0 then return -
    if (square % 1 != 0) {
        return -1;
    }
    //find sqrt of the parameter store in variable
    var square = Math.sqrt(sq)
    //   add 1 to the variable store in variable
    let nextNum = square + 1
    //multiply that variable by itself
    return nextNum * nextNum
    //   


}