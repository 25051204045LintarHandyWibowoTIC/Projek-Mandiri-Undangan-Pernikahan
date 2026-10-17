/* animasi.js : animasi muncul saat scroll (IntersectionObserver) */

/* ===== 13. Animasi muncul saat scroll (IntersectionObserver) =====
   Tambah/ubah baris di ANIMASI untuk mengatur elemen mana yang bergerak.
   jenis: "" = naik dari bawah, anim-kiri, anim-kanan, anim-zoom
   stagger: true = elemen muncul bergantian (berjeda) */
const ANIMASI = [
  { sel: ".hero .container > .row > div:first-child", jenis: "anim-kiri" },
  { sel: ".hero .container > .row > div:last-child", jenis: "anim-zoom" },
  { sel: ".judul", jenis: "" },
  { sel: ".kutipan", jenis: "" },
  { sel: "#mempelai .container > .row > div:first-child", jenis: "anim-kiri" },
  { sel: "#mempelai .container > .row > div:last-child", jenis: "anim-kanan" },
  { sel: "#acara .container > .row > div:first-child", jenis: "anim-kiri" },
  { sel: "#acara .container > .row > div:last-child", jenis: "anim-kanan" },
  { sel: ".grid-galeri .ph", jenis: "anim-zoom", stagger: true },
  { sel: "#galeri .container > .row > div", jenis: "", stagger: true },
  { sel: "#lokasi .container > .row > div:first-child", jenis: "anim-kiri" },
  { sel: "#lokasi .container > .row > div:last-child", jenis: "anim-kanan" },
  { sel: "#reservasi .container > .row > div:first-child", jenis: "anim-kiri" },
  { sel: "#reservasi .container > .row > div:last-child", jenis: "anim-kanan" },
  { sel: "#hadiah .isi-sempit", jenis: "", stagger: true },
  { sel: ".kaki", jenis: "" }
];

function siapkanAnimasi() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;  // hormati pengaturan perangkat
  ANIMASI.forEach((a) => {
    document.querySelectorAll(a.sel).forEach((el, i) => {
      el.classList.add("anim");
      if (a.jenis) el.classList.add(a.jenis);
      el.style.setProperty("--tunda", (a.stagger ? i * 0.12 : 0) + "s");
    });
  });
}

function mulaiAnimasi() {
  const pengamat = new IntersectionObserver((daftar) => {
    daftar.forEach((e) => {
      // Ditambah saat elemen terlihat, dilepas saat keluar layar,
      // jadi animasi diputar ulang setiap kali di-scroll bolak-balik.
      // GANTI: kalau ingin animasi hanya sekali, pakai add("tampil") lalu pengamat.unobserve(e.target)
      e.target.classList.toggle("tampil", e.isIntersecting);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".anim").forEach((el) => pengamat.observe(el));
}

