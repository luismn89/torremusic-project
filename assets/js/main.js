let activeMenu = false;
let transitionMenu = false;
document.querySelector('#btn-menu-mobile').addEventListener('click', () => {
  if (!transitionMenu) {
    const menuMobile = document.querySelector('#body-menu');
    if(!activeMenu) {
      menuMobile.closest('.navbar').classList.add('active-mobile')
      setTimeout(() => {
        menuMobile.classList.add('open');
      }, 200);
    } else {
      menuMobile.classList.remove('open');
      setTimeout(() => {
        menuMobile.closest('.navbar').classList.remove('active-mobile')
      }, 200);
    }
    activeMenu = !activeMenu;
  }
});

let submenuActive = false;
document.querySelector('.navbar__menu-options li .link-button i').addEventListener('click', evt => {
  if (!submenuActive) {
    submenuActive = true;
    document.querySelector('.navbar__menu-options li .link-button + .navbar__submenu').classList.add('open-submenu-mobile')
  } else {
    submenuActive = false;
    document.querySelector('.navbar__menu-options li .link-button + .navbar__submenu').classList.remove('open-submenu-mobile')
  }
});

if (!!document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}
const navbar = document.querySelector('.navbar'); 
window.addEventListener('scroll', evt => {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});