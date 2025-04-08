function shiftAlphabet(str, shift) {
    return str.replace(/[a-z]/gi, char => {
        let base = char < 'a' ? 65 : 97; 
        return String.fromCharCode((char.charCodeAt() - base + shift) % 26 + base);
    });
}

console.log(shiftAlphabet("gwt, gjxtp qz rfz rfpfs in bfwlty lfp?", 5)); 

