// Smooth Scroll
document.querySelectorAll(".menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah pindah halaman instan

    const targetId = this.getAttribute("href"); // Mengambil nilai #home, #skill, dll
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth", // Membuat efek geser halus
      });
    }
  });
});

// Validasi Form dan alert
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  if (nama && email && pesan) {
    alert("Pesan Anda Berhasil Dikirim");
    form.reset();
  } else {
    alert("Harap lengkapi semua data!");
  }
});

// Galeri (Klik gambar untuk melihat lebih besar/buka di tab baru)
function openImage(src) {
  window.open(src, "_blank");
}

// Scroll To Top Button
const btnTop = document.getElementById("scrollTop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
