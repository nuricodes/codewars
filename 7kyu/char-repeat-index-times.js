// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// Solution 1: map
function accum(s) {
    return [...s].map((char, index) => char.toUpperCase() + char.repeat(index).toLowerCase()).join('-')


}

// Solution 2: iterative solution
function accum(str) {
    //make string in to array
    let strArr = str.split('')
    //new variable to store new array
    let newArr = [];
    //iterate
    for (let i = 0; i < strArr.length; i++) {
        //push first i as uppercase and second i + 1 (to skip first i) to lowercase and to repeat i times
        newArr.push(strArr[i].toUpperCase() + strArr[i].repeat(i).toLowerCase())
    }
    //return newArray and join with dash
    return newArr.join('-')
}