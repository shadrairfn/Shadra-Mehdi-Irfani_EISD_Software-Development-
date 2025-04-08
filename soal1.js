let arr1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
let min = arr1[0];
let max = arr1[0];
let avg = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < min) {
        min = arr1[i];
    }

    if (arr1[i] > max) {
        max = arr1[i];
    }

    avg += arr1[i];
}

console.log(min,",", max, ",",(avg/arr1.length));