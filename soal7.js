function shiftAlphabet(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char >= 'A' && char <= 'Z') {
            let code = char.charCodeAt(0);
            let shiftedCode = ((code - 65 + shift) % 26) + 65;
            result += String.fromCharCode(shiftedCode);
        } else if (char >= 'a' && char <= 'z') {
            let code = char.charCodeAt(0);
            let shiftedCode = ((code - 97 + shift) % 26) + 97;
            result += String.fromCharCode(shiftedCode);
        } else {
            result += char;
        }
    }

    return result;
}


console.log(shiftAlphabet("gwt, gjxtp qz rfz rfpfs in bfwlty lfp?", 5)); 

