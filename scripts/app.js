let nav = document.querySelector('.anchor');
let hamburgerOpen = document.querySelector('.hamburger-open');
let hamburgerClose= document.querySelector('.hamburger-close');


hamburgerOpen.addEventListener('click', ()=>{
    nav.classList.add('right');
});

hamburgerClose.addEventListener('click', ()=>{
    nav.classList.remove('right');
})