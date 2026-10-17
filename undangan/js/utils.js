/* utils.js : fungsi bantu (arrow function, format tanggal) */

/* ===== 3. Function & arrow function ===== */
const dua = (n) => String(n).padStart(2, "0");   // arrow function

function formatTanggal(d) {
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return `${hari[d.getDay()]}, ${d.getDate()} ${NAMA_BULAN[d.getMonth()]} ${d.getFullYear()}`; // template literal
}

