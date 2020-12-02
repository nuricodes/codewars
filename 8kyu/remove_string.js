// Simple, remove the spaces from the string, then return the resultant string.

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////
function noSpace(x) {
    return x.replace(/ /g, '')     //used regex 'find global spaces and replace with no space
}



/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function noSpace(x) {
    let spaceless = '';
    for (let i = 0; i < x.length; i++) {         //loop through everything in x
        if (x[i] !== " ") {                      // if the index of x is !== to a space 
            x[i] += spaceless                   // then add the index of x to the spaceless sting
        }
    }
    return spaceless;                           //RETURN
}