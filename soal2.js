function isPalindrom(word){
    let reversed = word.split('').reverse().join('');
    if (word == reversed){
        return "eureeka!";
    }

    return "suka blyat";
}

console.log(isPalindrom('kodok'))
console.log(isPalindrom('Aku Suka Kamu'))
console.log(isPalindrom('Ibu Ratna antar ubi.'))