const NavButton = document.querySelector('.NavBar-button');
const navBar = document.querySelector('.TopBar');
const Logo = document.querySelector('.Logo-Plceholder');
const body = document.querySelector('.body');
const TopBarNav = document.querySelector('.Topbar-Desk-Nav');
const Portfolio = document.querySelector('#Portfolio');
const About = document.querySelector('#About');
const Contact = document.querySelector('#Contact');

const func = () => {
  navBar.classList.toggle('TopBar-Open');
  Logo.classList.toggle('invisable');
  body.classList.toggle('body-Open');
  TopBarNav.classList.toggle('Topbar-Desk-Nav-Open');
  NavButton.classList.toggle('NavBar-button-Open');
};

NavButton.addEventListener('click', func);

Portfolio.addEventListener('click', func);

About.addEventListener('click', func);

Contact.addEventListener('click', func);
