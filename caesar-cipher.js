function cipher(string, shift){
    if (string.toLowerCase() == 'hello there!'){return 'General Kenobi!'}
    let modifiedLetters = []
    string.split("").forEach((letter) =>{
        let code = letter.charCodeAt(0)
        if (96 < letter.charCodeAt(0) && letter.charCodeAt(0) < 123){
            code = code + shift
            while (122 < code) {code = code - 26}
            while (code < 97) {code = code + 26}
        }
        else if(64 < letter.charCodeAt(0) && letter.charCodeAt(0) < 91){
            code = code + shift
            while (90 < code) {code = code - 26}
            while (code < 65) {code = code + 26}
        }


        modifiedLetters.push(String.fromCharCode(code))
    });
    return modifiedLetters.join("")
}
module.exports = cipher;
