const NavButton = document.querySelector(".NavBar-button");
const navBar = document.querySelector(".TopBar");
const Logo = document.querySelector(".Logo-Plceholder");
const body = document.querySelector(".body");
const TopBarNav = document.querySelector(".Topbar-Desk-Nav");
const Portfolio = document.querySelector('#Portfolio');
const About = document.querySelector('#About');
const Contact = document.querySelector('#Contact');


NavButton.addEventListener('click', e => {
    
    navBar.classList.toggle('TopBar-Open');
    Logo.classList.toggle('invisable');
    body.classList.toggle('body-Open');
    TopBarNav.classList.toggle('Topbar-Desk-Nav-Open');
    NavButton.classList.toggle('NavBar-button-Open');
})

Portfolio.addEventListener('click', e =>{
    navBar.classList.replace('TopBar-Open', 'TopBar');
    Logo.classList.replace('invisable', 'Logo-Plceholder');
    TopBarNav.classList.replace('Topbar-Desk-Nav-Open', 'Topbar-Desk-Nav');
    body.classList.replace('body-Open', 'body');
    NavButton.classList.toggle('NavBar-button-Open');

})
About.addEventListener('click', e =>{
    navBar.classList.replace('TopBar-Open', 'TopBar');
    Logo.classList.replace('invisable', 'Logo-Plceholder');
    TopBarNav.classList.replace('Topbar-Desk-Nav-Open', 'Topbar-Desk-Nav');
    body.classList.replace('body-Open', 'body');
    NavButton.classList.toggle('NavBar-button-Open');

})
Contact.addEventListener('click', e =>{
    navBar.classList.replace('TopBar-Open', 'TopBar');
    Logo.classList.replace('invisable', 'Logo-Plceholder');
    TopBarNav.classList.replace('Topbar-Desk-Nav-Open', 'Topbar-Desk-Nav');
    body.classList.replace('body-Open', 'body');
    NavButton.classList.toggle('NavBar-button-Open');

})
