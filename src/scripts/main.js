'use strict';

const toggler = document.querySelector('#toggler');
const nav = document.querySelector('.nav');
const top = document.querySelector('.header__top');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  toggler.classList.toggle('header__menu--active');
  top.classList.toggle('header__top--active');
}
);
