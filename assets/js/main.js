const DATA_FOCUS_IMAGE = [
  {
    focusX: '-0.3',
    imageX: '922',
    imageY: '666'
  },
  {
    focusX: '0.05',
    imageX: '922',
    imageY: '666'
  },
  {
    focusX: '-0.3',
    imageX: '922',
    imageY: '666'
  },
  {
    focusX: '-0.3',
    imageX: '922',
    imageY: '666'
  },
  {
    focusX: '-0.3',
    imageX: '922',
    imageY: '666'
  },
  {
    focusX: '-0.3',
    imageX: '922',
    imageY: '666'
  },
]
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

if (!!document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
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