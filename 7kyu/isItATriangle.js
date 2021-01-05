// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////
function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        return true
    } else {
        return false
    }
}

///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}

///////////////////////////////////////////////////////////////
// SECTION 3
///////////////////////////////////////////////////////////////
[a, b, c] = [a, b, c].sort((x, y) => x - y)
return a + b > c