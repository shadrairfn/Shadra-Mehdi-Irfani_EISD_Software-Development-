function generateUsernames(name, maxLength) {
    let cleanName = name.replace(/\s/g, '').toLowerCase(); 
    let splitName = cleanName.split('');
    let usernameSet = new Set(); 

    function generateCombination(current, remaining) {
        if (current.length > 0 && current.length <= maxLength) {
            usernameSet.add(current); 
        }

        for (let i = 0; i < remaining.length; i++) {
            generateCombination(current + remaining[i], remaining.slice(0, i).concat(remaining.slice(i + 1)));
        }
    }

    generateCombination("", splitName);

    console.log(`Total kemungkinan username: ${usernameSet.size}`);
    console.log([...usernameSet]); 
}

generateUsernames('naiv lovyu', 6);