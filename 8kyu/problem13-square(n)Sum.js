// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////
function squareSum(numbers) {
    let sqrd = numbers.map(num => num * num); //iterate to and num*num
    let addNumbs = sqrd.reduce((acc, curr) => //add sqr num to acc=addNums
        acc + curr, 0)
    return addNumbs
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////
function squareSum(numbers) {
    return numbers.map(square).reduce(sum);
}
function sum(num1, num2) {
    return num1 + num2;
}

function square(num) {
    return num * num;
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////
function squareSum(numbers) {
    return numbers.reduce((acc, curr) =>
        acc + (curr * curr), 0
    );
}