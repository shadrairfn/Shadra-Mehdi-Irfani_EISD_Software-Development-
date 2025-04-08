let angka = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19];

let duplikat = false;

for (let i = 0; i < angka.length; i++) {
    let first_num = angka[i];
    for (let j = 0; j < angka.length; j++) {
        if (first_num == angka[j] && j != i) {
            duplikat = true;
        }
    }
}

console.log(duplikat);