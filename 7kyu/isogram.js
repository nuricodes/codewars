// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////

function isIsogram(str) {
    let strObj = {};
    for (let char of str.toLowerCase()) {
        strObj[char] ? strObj[char]++ : strObj[char] = 1;
    }

    for (let key in strObj) {
        if (strObj[key] > 1) return false
    }
    return true;
}

///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////

function isIsogram(str) {
    return !/(\w).*\1/i.test(str)
}


