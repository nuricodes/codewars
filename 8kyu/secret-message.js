// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }

/////////////////////////////////////////////
// SOLUTION 1
/////////////////////////////////////////////

const greet = name => name === "Johnny" ? "Hello, my love" : `Hello, ${name}!`


/////////////////////////////////////////////
// SOLUTION 2
/////////////////////////////////////////////

function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

/////////////////////////////////////////////
// SOLUTION 3
/////////////////////////////////////////////

function greet(name) {
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!"
}