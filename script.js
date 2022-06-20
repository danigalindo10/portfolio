/* eslint-disable no-plusplus */
const hamburgerButton = document.getElementById('menu-btn');

hamburgerButton.addEventListener('click', () => {
  document.getElementById('lead').className += ' display-menu';
  document.getElementsByClassName('logo')[0].className += ' display-menu';
  document.getElementById('menu').className += ' display-menu';
  document.getElementsByClassName('nav-container')[0].classList.add('display-menu');
  document.getElementsByClassName('categories')[0].classList.add('display-menu');
  document.getElementsByClassName('close')[0].classList.add('display-menu');
  document.getElementsByClassName('header-content')[0].classList.add('display-menu');
  document.getElementsByTagName('body')[0].classList.add('display-menu');

  for (let i = 0; i < document.getElementsByClassName('category').length; i++) {
    document.getElementsByClassName('category')[i].classList.add('display-menu');
  }
});
