(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".header-backdrop"),
    menuList: document.querySelector(".header-menu-nav-list"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", closeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }

  function closeMenu() {
    refs.menu.classList.add("is-hidden");
  }
})();