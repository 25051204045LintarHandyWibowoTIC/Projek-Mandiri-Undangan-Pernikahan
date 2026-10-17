/* hiasan.js : kelopak jatuh dan kilau bintang */

/* ===== 11. Hiasan kelopak jatuh (DOM + Math.random) ===== */
function buatKelopak(wadah, jumlah) {
  for (let i = 0; i < jumlah; i++) {
    const k = document.createElement("span");
    k.className = "kelopak";
    const ukuran = 8 + Math.random() * 10;                      // 8-18 px
    k.style.width = k.style.height = ukuran + "px";
    k.style.left = Math.random() * 100 + "%";
    k.style.animationDuration = 9 + Math.random() * 8 + "s";
    k.style.animationDelay = -Math.random() * 12 + "s";        // negatif = langsung berjalan
    wadah.appendChild(k);
  }
}

/* ===== 12. Kilau bintang kecil ===== */
function buatKilau(wadah, jumlah) {
  for (let i = 0; i < jumlah; i++) {
    const k = document.createElement("span");
    k.className = "kilau";
    k.innerHTML = '<svg viewBox="0 0 20 20" width="100%" height="100%"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" fill="currentColor"/></svg>';
    k.style.width = k.style.height = 10 + Math.random() * 12 + "px";
    k.style.left = Math.random() * 100 + "%";
    k.style.top = Math.random() * 100 + "%";
    k.style.animationDelay = -Math.random() * 3 + "s";
    wadah.appendChild(k);
  }
}

