// === script.js - Efek Festival China ===

// 🏮 Efek lentera melayang
function spawnLanterns(count = 5) {
    for (let i = 0; i < count; i++) {
        const lantern = document.createElement("div");
        lantern.classList.add("lantern");
        lantern.style.left = `${Math.random() * 90 + 5}%`;
        lantern.style.animationDelay = `${Math.random() * 3}s`;
        document.body.appendChild(lantern);
    }
}
spawnLanterns(4);

// 🌸 Efek muncul saat scroll
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) el.classList.add("active");
    });
});

// Tombol Garis Tiga Mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Toggle tersembunyi / tampil
            mobileMenu.classList.toggle('hidden');
            // Toggle border hanya saat menu terbuka
            mobileMenu.classList.toggle('border-b-4');
            mobileMenu.classList.toggle('border-yellow-400');
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('border-b-4', 'border-yellow-400');
            }
        });
    });
});

// ⬆️ Tombol kembali ke atas
const scrollBtn = document.createElement("div");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = "⬆️";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.background = "var(--primary)";
scrollBtn.style.color = "var(--secondary)";
scrollBtn.style.padding = "12px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.transition = "0.3s";
scrollBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ==========================================
// 🖼️ 1. POPUP GALERI KEGIATAN (image-popup)
// ==========================================
function openImagePopup(src) {
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img");
    if (!popup || !popupImg) return;

    popupImg.src = src;
    popup.classList.remove("hidden");
    setTimeout(() => {
        popup.classList.add("show");
    }, 10);
}

function closeImagePopup() {
    const popup = document.getElementById("image-popup");
    if (!popup) return;

    popup.classList.remove("show");
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 300);
}


// Event Listener Klik Luar Gambar (Aman dari Null Error)
document.addEventListener("DOMContentLoaded", () => {
    const galleryPopup = document.getElementById("image-popup");
    if (galleryPopup) {
        galleryPopup.addEventListener("click", function (e) {
            if (e.target === this) closeImagePopup();
        });
    }

    const scheduleModal = document.getElementById("imageModal");
    if (scheduleModal) {
        scheduleModal.addEventListener("click", function (e) {
            if (e.target === this) closeModal();
        });
    }
});