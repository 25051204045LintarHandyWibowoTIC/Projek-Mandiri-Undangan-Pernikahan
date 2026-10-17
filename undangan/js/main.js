/* main.js : isi data, nama tamu, buka undangan, musik, dan penjalan awal */

/* ===== 4. DOM: isi semua elemen data-isi dari DATA ===== */
function isiData() {
  DATA.tanggalPanjang = formatTanggal(DATA.tanggalAkad);
  document.querySelectorAll("[data-isi]").forEach((el) => {
    const kunci = el.getAttribute("data-isi");
    if (DATA[kunci] !== undefined) el.innerHTML = DATA[kunci];
  });
  document.getElementById("noRek").textContent = DATA.noRek;
  // String method: ambil huruf pertama nama -> monogram "R & S"
  document.getElementById("monogram").textContent =
    DATA.pria.charAt(0).toUpperCase() + " & " + DATA.wanita.charAt(0).toUpperCase();
  document.title = `Undangan ${DATA.pria} & ${DATA.wanita}`;
}

/* ===== 5. Nama tamu dari URL =====
   Contoh: https://situsmu.vercel.app/?to=Budi%20dan%20Ani   */
function isiNamaTamu() {
  const param = new URLSearchParams(window.location.search).get("to");
  if (param) {
    document.getElementById("namaTamu").textContent = param;
    document.getElementById("nama").value = param;   // otomatis di form reservasi
  }
}

/* ===== 6. Event & classList ===== */
function bukaUndangan() {
  document.getElementById("cover").classList.add("terbuka");   // geser cover ke atas
  document.body.classList.remove("terkunci");
  setTimeout(() => document.getElementById("cover").style.display = "none", 1100); // setTimeout
  toggleMusik(true);
  setTimeout(mulaiAnimasi, 500);   // animasi scroll mulai setelah cover terbuka
}

function toggleMusik(paksaPutar) {
  const audio = document.getElementById("musik");
  const tombol = document.getElementById("btnMusik");
  if (paksaPutar === true || audio.paused) {
    audio.play().catch(() => console.warn("Musik belum tersedia / diblokir browser"));
  } else {
    audio.pause();
  }
  tombol.classList.toggle("putar", !audio.paused);
}

/* ===== Jalankan saat halaman siap ===== */
buatKilau(document.getElementById("cover"), 10);
buatKilau(document.getElementById("beranda"), 10);
siapkanAnimasi();
buatKelopak(document.getElementById("cover"), 14);   // GANTI angka untuk jumlah kelopak
buatKelopak(document.getElementById("beranda"), 12);
isiData();
isiNamaTamu();
tampilUcapan();
hitungMundur();
timerHitung = setInterval(hitungMundur, 1000);
