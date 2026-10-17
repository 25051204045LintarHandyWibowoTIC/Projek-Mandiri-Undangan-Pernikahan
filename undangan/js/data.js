/* data.js : DATA undangan (EDIT DI SINI) + variabel global */

/* =====================================================================
   1. DATA UNDANGAN  --  CUKUP UBAH BAGIAN INI SAJA
   Semua nama, tanggal, lokasi di halaman diisi otomatis dari objek ini.
   ===================================================================== */
const DATA = {
  pria: "Lintar",                          // GANTI: nama panggilan mempelai pria
  wanita: "Elysia",                       // GANTI: nama panggilan mempelai wanita
  priaLengkap: "Lintar Handy WIbowo",   // GANTI: nama lengkap pria
  wanitaLengkap: "Elysia",
  ortuPria: "Bapak Anto; Ibu Dessy",     // GANTI: orang tua pria
  ortuWanita: "Cocoon of Finality; Ibu Celia", // GANTI: orang tua wanita
  // GANTI tanggal: format (tahun, bulan 0-11, tanggal, jam, menit). Contoh bulan 11 = Desember
  tanggalAkad: new Date(2033, 4, 3, 9, 0),
  jamAkad: "09.00 - 10.00 <abbr title='Waktu Indonesia Barat'>WIB</abbr>",
  jamResepsi: "11.00 - 14.00 <abbr title='Waktu Indonesia Barat'>WIB</abbr>",
  tempat: "Grand Fullerton Ballroom",
  alamat: "Jl. Basuki Rahmat No.16-18, Surabaya",
  kota: "Surabaya",
  bank: "Bank BCA",
  noRek: "1234567890",
  atasNama: "Lintar Handy WIbowo",
  // GANTI: ucapan awal (contoh). Ucapan baru dari form hanya tersimpan sementara
  ucapanAwal: [
    { nama: "Budi", pesan: "Selamat menempuh hidup baru!", hadir: "Hadir" },
    { nama: "Ani", pesan: "Semoga samawa, bahagia selalu.", hadir: "Hadir" }
  ]
};

/* ===== 2. Variabel, tipe data, operator, console ===== */
let ucapan = [...DATA.ucapanAwal];   // let: bisa berubah (array)
var timerHitung;                     // var: scope fungsi
const NAMA_BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
console.log("Undangan dimuat untuk:", DATA.pria, "&", DATA.wanita);

