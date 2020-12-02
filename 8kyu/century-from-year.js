// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function century(year) {
    for (let i = 0; i < 2021; i++) {
        if (year % 100 === 0) {
            return year / 100
        } else {
            return Math.floor(year / 100) + 1
        }
    }
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function century(year) {
    return year % 100 === 0 ? year / 100 : parseInt(year / 100) + 1
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

const century = year => Math.ceil(year / 100)
