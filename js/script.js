// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Glitch Effect btn
document.querySelectorAll(".btn").forEach((btn) => {
   btn.addEventListener("mouseenter", () => {
      const rotate = (Math.random() * 4 - 2).toFixed(1);
      const skew = (Math.random() * 4 - 2).toFixed(1);
      btn.style.transform = `scale(1.02) rotate(${rotate}deg) skew(${skew}deg)`; // Scale dikurangi agar tidak terlalu agresif dengan design baru
   });

   btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
   });
});

// Heart interaction
document.getElementById("heart").addEventListener("click", function () {
   this.classList.toggle("animate-heart");
});

// Toast Notification
function Injil() {
   const message = "Karena masa depan sungguh ada, dan harapanmu tidak akan hilang.";
   showToast(message);
}

function showToast(message) {
   const container = document.getElementById("toast-container");
   const toast = document.createElement("div");
   toast.className = "toast";
   toast.innerHTML = `<i class="fa fa-quote-left"></i> ${message}`;

   container.appendChild(toast);

   setTimeout(() => {
      toast.style.animation = "fadeOut 0.3s ease forwards";
      setTimeout(() => {
         toast.remove();
      }, 300);
   }, 3500);
}

/**
 * ANIMASI BACKGROUND CANVAS (PARTICLE NETWORK)
 */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let width, height;
let particles = [];

function resize() {
   width = canvas.width = window.innerWidth;
   height = canvas.height = window.innerHeight;
}

class Particle {
   constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2;
      this.alpha = Math.random();
   }

   update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
   }

   draw() {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.5})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
   }
}

function initParticles() {
   particles = [];
   const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
   for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
   }
}

function drawLines() {
   const maxDistance = 150;
   for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
         const dx = particles[i].x - particles[j].x;
         const dy = particles[i].y - particles[j].y;
         const distance = Math.sqrt(dx * dx + dy * dy);

         if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
         }
      }
   }
}

function animate() {
   ctx.clearRect(0, 0, width, height);
   particles.forEach((p) => {
      p.update();
      p.draw();
   });
   drawLines();
   requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
   resize();
   initParticles();
});

resize();
initParticles();
animate();
