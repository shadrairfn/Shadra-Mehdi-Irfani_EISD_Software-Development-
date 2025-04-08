let nameChild = ['Bagas', 'Dimas', 'Fajar', 'Bagas', 'Indra', 'Gilang', 'Gilang', 'Bagas', 'Fajar', 'Fajar'];
let maxCount = 0;
let biggestCount = [];

let countChild = {};

for (let child of nameChild){
    if (!(child in countChild)){
        countChild[child] = 0;
    }
    countChild[child] += 1;

    if (countChild[child] > maxCount){
        maxCount = countChild[child];
    }
}

for (let child in countChild){
    if (maxCount == countChild[child]){
        biggestCount.push(child);
    }
}

if (biggestCount.length > 1){
    console.log(`${biggestCount.join(',')} nakal`);
} else {
    console.log(`${biggestCount} nakal`);
}