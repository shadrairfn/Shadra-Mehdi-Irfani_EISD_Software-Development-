let guest = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];

let habits = {
    'Ningguang' : 'Memeriksa kue sebelum memberi kado',
    'Hutao' : 'Langsung memberikan kue',
    'Xiao' : 'Memotret apapun yang dilihatnya',
    'Childe' : 'Membawa air mineral dan meletakkannya di meja'
};

let checkStatus = 'ada';

for (let i = 0; i < guest.length; i++) {
    let tamu = guest[i];

    console.log(`${tamu} masuk dan ${habits[tamu]}`);

    if (tamu == 'Xiao') {
        console.log(`${tamu} keluar dan kue masih ada`);
    } else if (tamu == 'Childe'){
        console.log(`${tamu} keluar dan kue telah hilang`);
        checkStatus = 'hilang';
    }
}

if (checkStatus == 'hilang') {
    console.log("Pelaku : Childe");
} else {
    console.log("Tidak ada pelaku");
}