// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

// Solution 2
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 != 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
}

// Solution 1
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    //if sqrt !have a remainder of 0 then return -
    if (Math.sqrt(sq) % 1 != 0) {
        return -1;
    }
    //find sqrt of the parameter store in variable
    let square = Math.sqrt(sq)
    //   add 1 to the variable store in variable
    let nextNum = square + 1
    //multiply that variable by itself
    return nextNum * nextNum
    //   


}