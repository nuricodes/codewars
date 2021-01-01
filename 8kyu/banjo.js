// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!



function areYouPlayingBanjo(name) {
    return name.includes('r') || name.includes('R') ? `${name} are playing the banjo` : "Are you playing the banjo?"
}