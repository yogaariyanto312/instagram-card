// Year
document.getElementById("year").textContent = new Date().getFullYear(); // Tampilkan tahun saat ini
// document.getElementById("date").textContent = new Date().toDateString();


// Loading
window.addEventListener("load", function () {
   setTimeout(() => {
      const loading = document.getElementById("loading"); // Ambil elemen loading
      loading.style.opacity = "0"; // Sembunyikan loading
      loading.style.transform = "translateY(-20px)"; // Sembunyikan loading
      setTimeout(() => { // Setelah animasi loading selesai
         loading.style.display = "none"; // Sembunyikan elemen loading
         const container = document.querySelector(".container"); // Ambil elemen container
         container.style.opacity = "1"; // Tampilkan elemen container
         container.style.transform = "translateY(0)"; // Tampilkan elemen container
      }, 300); // Waktu animasi loading
   }, 800); // Waktu loading
});
  

// Glitch Effect btn

document.querySelectorAll(".btn").forEach((btn) => { // Loop semua tombol
   btn.addEventListener("mouseenter", () => { // Ketika mouse berada di atas tombol
      const rotate = (Math.random() * 4 - 2).toFixed(1); // -2° to +2° 
      const skew = (Math.random() * 4 - 2).toFixed(1); // -2° to +2°
      btn.style.transform = `scale(1.05) rotate(${rotate}deg) skew(${skew}deg)`; // Apply transform
   });

   btn.addEventListener("mouseleave", () => { // Ketika mouse keluar dari tombol
      btn.style.transform = ""; // Reset transform
   });
});

//heart
document.getElementById("heart").addEventListener("click", function() { // Ketika tombol di klik
  this.classList.toggle("animate-heart"); // Tambah atau hapus class animate-heart
});
// alert Injil
function Injil() { // Fungsi Injil
   alert("Karena masa depan sungguh ada, dan harapanmu tidak akan hilang."); // Tampilkan alert
}