let produk = {
    'TV': { 'kategori': 'elektronik', 'harga': 1000 },
    'headphone': { 'kategori': 'elektronik', 'harga': 200 },
    'baju': { 'kategori': 'fashion', 'harga': 50 },
    'gitar': { 'kategori': 'musik', 'harga': 300 },
    'sepatu': { 'kategori': 'olahraga', 'harga': 80 },
    'kamera': { 'kategori': 'elektronik', 'harga': 600 }
};

let pelanggan = {
    'Rina': {'minat': ['elektronik', 'musik'], 'beli': ['TV', 'headphone'] },
    'Budi' : {'minat' : ['fashion', 'musik'], 'beli' : ['baju', 'gitar']},
    'Hartono' : {'minat' : ['olahraga', 'elektronik'], 'beli' : ['sepatu', 'kamera']}
};


function peminatan(produk, pelanggan, nama) {
    let barang = [];
    for (let i = 0; i < pelanggan[nama]['minat'].length; i++) {
        for (let item in produk) {
            if (produk[item]['kategori'] == pelanggan[nama]['minat'][i]) {
                barang.push(item);
            }
        }
    }

    console.log(`${nama} : ${barang}`);
}

for (let nama in pelanggan) {
    peminatan(produk, pelanggan, nama);
}