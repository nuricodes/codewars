// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////
function getAverage(marks) {
    let total = marks.reduce((acc, g) => acc + g);
    return total / marks.length
}

/////////////////////////////////////////////
// SOLUTION 2
///////////////////////////////////////////// 
const getAverage = marks => Math.floor(marks.reduce((acc, g) => acc + g)) / marks.length;

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////
function getAverage(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i]
    }
    return total / marks.length
}