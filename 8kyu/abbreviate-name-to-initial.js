// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
    //return name.split(' ').map(n => n.charAt()).join('.')
    //return name.split(' ')[0].charAt() + '.' + name.split(' ')[1].charAt()

}

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

function abbrevName(name) {
    return name.split(' ').map(n => n.charAt()).join('.')
}

/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function abbrevName(name) {
    let a = name.split(' ')
    return a[0].charAt() + '.' + a[1].charAt()
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

function abbrevName(name) {
    return name.split(' ').map(x => x.substr(0, 1)).join('.')
}
