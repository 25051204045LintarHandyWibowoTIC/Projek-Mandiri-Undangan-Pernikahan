/* countdown.js : hitung mundur menuju hari acara */

/* ===== 7. Date + setInterval: hitung mundur ===== */
function hitungMundur() {
  const selisih = DATA.tanggalAkad - new Date();   // operator aritmatika (ms)
  if (selisih <= 0) {
    document.querySelector(".hitung").innerHTML = "<p class='fs-5'>Hari bahagia telah tiba</p>";
    clearInterval(timerHitung);
    return;
  }
  const detik = Math.floor(selisih / 1000);
  document.getElementById("cdHari").textContent = Math.floor(detik / 86400);
  document.getElementById("cdJam").textContent = dua(Math.floor((detik % 86400) / 3600));
  document.getElementById("cdMenit").textContent = dua(Math.floor((detik % 3600) / 60));
  document.getElementById("cdDetik").textContent = dua(detik % 60);
}

