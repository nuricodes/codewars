// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function countSheeps(arrayOfSheep) {
    const sheepsPresent = arrayOfSheep.filter(sheep => sheep === true);
    return sheepsPresent.length
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function countSheeps(arrayOfSheep) {
    return sheepsPresent = arrayOfSheep.filter(Boolean).length
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep === true).length
}

/////////////////////////////////////////////
// SOLUTION 4
/////////////////////////////////////////////
function countSheeps(arrayOfSheep) {
    let num = 0;
    for (let i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] === true)
            num++
    return num
}