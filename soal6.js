let menu = {
    'Ayam Goreng Krispi' : {
        'kategori' : 'makanan',
        'harga' : 15000
    },

    'Ayam Puk Puk' : {
        'kategori' : 'makanan',
        'harga' : 13000
    },

    'Ayam Bakar' : {
        'kategori' : 'makanan',
        'harga' : 20000
    },

    'Es Teh' : {
        'kategori' : 'minuman',
        'harga' : 5000
    },

    'Es Jeruk' : {
        'kategori' : 'minuman',
        'harga' : 7000
    }
};

function hitungHargaMakanan(menu, itemMenu) {
    let harga = menu[itemMenu]['harga'] + (menu[itemMenu]['harga'] * 0.05);

    return harga;
}

function hitungHargaMinuman(menu, itemMenu) {
    let harga = menu[itemMenu]['harga'] + (menu[itemMenu]['harga'] * 0.03);

    return harga;
}

function hitungTotal(menu, pesanan) {
    let total = 0;
    let hargaItem = 0;
    for (let item in pesanan) {
        let jumlah = pesanan[item];
        if (menu[item]['kategori'] == 'makanan') {
            hargaItem = hitungHargaMakanan(menu, item) * jumlah;
            total += hargaItem;
        } else {
            hargaItem = hitungHargaMinuman(menu, item) * jumlah;
            total += hargaItem;
        }
    }

    return total + (total * 0.15);
}

let pesananRehan = {
    'Ayam Bakar' : 2,
    'Es Teh' : 1
}

let pesananAmba = {
    'Ayam Puk Puk' : 1,
    'Es Teh' : 3
}

let pesananFaiz = {
    'Ayam Goreng Krispi' : 1,
    'Ayam Puk Puk' : 1,
    'Ayam Bakar' : 1,
    'Es Teh' : 1,
    'Es Jeruk' : 1
}

console.log(`Pesanan Rehan : ${hitungTotal(menu, pesananRehan)}`);
console.log(`Pesanan Amba : ${hitungTotal(menu, pesananAmba)}`);
console.log(`Pesanan Faiz : ${hitungTotal(menu, pesananFaiz)}`);