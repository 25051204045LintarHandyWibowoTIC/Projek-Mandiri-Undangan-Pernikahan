# Undangan Pernikahan Digital (HTML + CSS + Bootstrap + JS)

## Struktur file (kalau ada error, cari sesuai tugas file)
index.html              kerangka halaman (semua section)
css/fonts.css           font lokal (assets/fonts): Great Vibes, Cormorant Garamond, Jost
css/base.css            warna, font, teks dasar, link
css/layout.css          navbar, jarak antar bagian, sampul mempelai, grid galeri
css/components.css      kartu, placeholder foto, ucapan, footer, tombol musik
css/hiasan.css          bingkai foto pasangan & mempelai, kelopak jatuh, kilau
css/reservasi.css        tombol pink, header jendela, modal
css/animasi.css         animasi muncul saat scroll
css/kotak.css            garis, bayangan, efek timbul kartu/form/galeri
css/cetak.css            tampilan cetak (hanya bukti kehadiran)
css/gradasi.css          latar isi (latar-isi.jpg) + gradasi pink transparan
css/cover.css           layar pembuka (HARUS dimuat paling akhir)
js/data.js              DATA undangan: nama, tanggal, lokasi, rekening (EDIT DI SINI)
js/utils.js             fungsi bantu
js/hiasan.js            kelopak jatuh dan kilau
js/animasi.js           animasi scroll (daftar ANIMASI)
js/countdown.js         hitung mundur
js/bukti.js              bukti kehadiran (digambar di canvas), unduh PNG, simpan localStorage
js/reservasi.js         tombol RSVP (modal), validasi, hitung tamu hadir
js/ucapan.js            form ucapan dan daftar ucapan
js/hadiah.js            salin nomor rekening
js/main.js              isi data, buka undangan, musik, dan penjalan awal (HARUS paling akhir)
assets/                 foto, video, musik, bingkai-mempelai.webp, bingkai-pria-wanita.webp, bingkai-cover.webp, cover-lebar.jpg, bingkai-pria-wanita.webp, header-jendela.webp, cover.jpg, latar-isi.jpg, latar-moment.jpg, latar-bukti.jpg

Urutan tag <link> dan <script> di index.html penting, jangan diubah.

## Cara mengubah data
Buka js/data.js, ubah objek DATA. Link lokasi: ubah q= pada iframe #peta dan tombol #btnPeta di index.html.

## Nama tamu
https://domainmu.vercel.app/?to=Budi%20dan%20Ani

## Deploy Vercel
Upload folder ke GitHub, import di vercel.com, Framework Preset: Other, Deploy.
