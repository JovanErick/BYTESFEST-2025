const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const menu2 = document.getElementById("menu2");

  // Fungsi untuk memindahkan menu2 ke dalam menu
  function moveMenu2() {
    const isMobile = window.innerWidth <= 1200;

    if (isMobile && !menu.contains(menu2)) {
      menu.appendChild(menu2); // pindahkan ke dalam menu
    } else if (!isMobile && menu2.parentElement !== document.querySelector("nav")) {
      document.querySelector("nav").appendChild(menu2); // kembalikan ke nav
    }
  }

  // Trigger saat pertama kali dan saat resize
  window.addEventListener("DOMContentLoaded", moveMenu2);
  window.addEventListener("resize", moveMenu2);

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });