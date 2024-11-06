AOS.init({
  duration: 1000, // Durasi
  easing: "ease",
  once: true,
});

// Pilih semua item navbar
const menuItems = document.querySelectorAll(".navbar-item a");

// Fungsi untuk mengatur kelas aktif
function setActive(item) {
  // Hapus kelas aktif dari semua item
  menuItems.forEach((link) => {
    link.classList.remove("text-red-400"); // Menghapus kelas aktif
    link.classList.add("text-white"); // Menambahkan warna teks putih
  });

  // Tambahkan kelas aktif pada item yang diklik
  item.classList.add("text-red-400"); // Menambahkan kelas warna merah pada item yang aktif
}

// Tambahkan event listener untuk setiap item navbar
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    setActive(this); // Panggil fungsi setActive untuk menambahkan kelas aktif
  });
});

// Menandai item aktif berdasarkan URL saat ini (jika ada)
const currentPath = window.location.hash; // Menggunakan hash jika bagian URL (#about, #mahasiswa, dll)
if (currentPath) {
  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPath) {
      setActive(item); // Menambahkan warna merah pada item yang sesuai dengan hash URL
    }
  });
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var typed = new Typed("#typed-output", {
  strings: [
    "if (feeling == 'lost') { heart++; }",
    "while (missing != null) { I.search(); }",
    "while (love > 0) { giveMore(); } else { break; }",
    "try { heart.open(); } catch (Exception e) { closed(); }",
    "let heart = love, but heart == broken",
    "SELECT love FROM heart WHERE love = NULL;",
    "heart = []love = NaN",
    "const love = true, but heart = error 404",
  ],
  typeSpeed: 70, // Kecepatan mengetik
  backSpeed: 50, // Kecepatan backspace (menghapus)
  backDelay: 1000, // Delay setelah mengetik sebelum backspace
  startDelay: 500, // Delay sebelum mulai mengetik
  loop: true, // Mengulang animasi
  showCursor: true, // Menampilkan cursor
});
