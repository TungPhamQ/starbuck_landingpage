let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
let menuToggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
themeSwitch.onclick= function() {
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
}
menuToggle.onclick =  function() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    
}