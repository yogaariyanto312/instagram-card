// Year
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("load", function () {
   setTimeout(() => {
      const loading = document.getElementById("loading");
      loading.style.opacity = "0";
      loading.style.transform = "translateY(-20px)";
      setTimeout(() => {
         loading.style.display = "none";
         const container = document.querySelector(".container");
         container.style.opacity = "1";
         container.style.transform = "translateY(0)";
         container.style.boxShadow = "0 0 60px rgba(0, 255, 255, 0)";
      }, 500);
   }, 2000);
});
  

// Glitch Effect btn

document.querySelectorAll(".btn").forEach((btn) => {
   btn.addEventListener("mouseenter", () => {
      const rotate = (Math.random() * 4 - 2).toFixed(1); // -2° to +2°
      const skew = (Math.random() * 4 - 2).toFixed(1); // -2° to +2°
      btn.style.transform = `scale(1.05) rotate(${rotate}deg) skew(${skew}deg)`;
   });

   btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
   });
});
  