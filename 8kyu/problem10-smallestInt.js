// Given an array of integers your solution should find the smallest integer.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args) // spread operator to show arg as array
    }
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(null, args)
    }
}

