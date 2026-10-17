# Undangan Pernikahan Digital (HTML + CSS + Bootstrap + JS)

## Struktur file (kalau ada error, cari sesuai tugas file)
index.html              kerangka halaman (semua section)
css/base.css            warna, font, teks dasar, link
css/layout.css          navbar, jarak antar bagian, hero, grid galeri
css/components.css      kartu, placeholder foto, ucapan, footer, tombol musik
css/hiasan.css          bunga SVG, kelopak, kilau, bingkai foto
css/animasi.css         animasi muncul saat scroll
css/gradasi.css         gradasi latar biru + pink tiap bagian
css/cover.css           layar pembuka (HARUS dimuat paling akhir)
js/data.js              DATA undangan: nama, tanggal, lokasi, rekening (EDIT DI SINI)
js/utils.js             fungsi bantu
js/hiasan.js            kelopak jatuh dan kilau
js/animasi.js           animasi scroll (daftar ANIMASI)
js/countdown.js         hitung mundur
js/rsvp.js              form reservasi, validasi, daftar ucapan, salin rekening
js/main.js              isi data, buka undangan, musik, dan penjalan awal (HARUS paling akhir)
assets/                 foto, video, musik

Urutan tag <link> dan <script> di index.html penting, jangan diubah.

## Cara mengubah data
Buka js/data.js, ubah objek DATA. Link lokasi: ubah q= pada iframe #peta dan tombol #btnPeta di index.html.

## Nama tamu
https://domainmu.vercel.app/?to=Budi%20dan%20Ani

## Deploy Vercel
Upload folder ke GitHub, import di vercel.com, Framework Preset: Other, Deploy.
