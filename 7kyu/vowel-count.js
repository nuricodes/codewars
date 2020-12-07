// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////

function getCount(str) {
    var vowelsCount = 0;

    str.split('').map(c => c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' ? vowelsCount++ : vowelsCount)

    return vowelsCount;
}
getCount("abracadabra")

///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            str[i] === vowels[j] ? vowelsCount++ : vowelsCount
        }
    }

    return vowelsCount
}

///////////////////////////////////////////////////////////////
// SECTION 3
///////////////////////////////////////////////////////////////

function getCount(str) {
    return str.split('').filter(c => 'aeiou'.includes(c)).length
}
getCount("abracadabra")