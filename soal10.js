function pecahanKembalian(total_kembalian){
    let uang_tersedia = [100000, 50000, 20000,  10000, 5000, 2000, 1000, 500, 200, 100];
    let hasil_pecahan = {};
    let uang_kembalian = total_kembalian;

    let banyak_pecahan = uang_tersedia.length;
    let i = -1;

    while (i < banyak_pecahan && uang_kembalian > 0){
        i += 1;
        if (uang_tersedia[i] <= uang_kembalian){
            if (uang_tersedia[i] in hasil_pecahan){
                hasil_pecahan[uang_tersedia[i]] += 1;
            } else {
                hasil_pecahan[uang_tersedia[i]] = 1;
            }

            uang_kembalian -= uang_tersedia[i];
            i = -1;
        }
    }

    return hasil_pecahan;
}

console.log(pecahanKembalian(3900));