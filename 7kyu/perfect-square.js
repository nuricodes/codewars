// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0
}

///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n))
}


