// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.



///////////////////////////////////////////////////////////////
// SECTION 1
///////////////////////////////////////////////////////////////
function maskify(cc) {
    let masked = '';
    for (let i = 0; i < cc.length - 4; i++) {
        masked += '#'
    }
    masked += cc.slice(-4)
    return masked
}

///////////////////////////////////////////////////////////////
// SECTION 2
///////////////////////////////////////////////////////////////
function maskify(cc) {
    cc = cc.split('')
    for (let i = 0; i < cc.length - 4; i++) {
        cc[i] = "#"
    }
    return cc.join('')
} 