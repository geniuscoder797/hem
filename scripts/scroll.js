let scrollingMe = document.querySelector('.scroll');
let  nextDom = document.getElementById('next');
let  backDom = document.getElementById('back');

        scrollingMe.addEventListener('wheel', (evt)=> {
            evt.preventDefault();
            scrollingMe.scrollLeft += evt.deltaY;
            scrollingMe.style.scrollBehaviour = 'auto';
        });

        nextDom.addEventListener('click', ()=> {
            scrollingMe.scrollLeft += 800;
            scrollingMe.style.scrollBehaviour = 'smooth';
        });
        backDom.addEventListener('click', ()=> {
            scrollingMe.scrollLeft -= 800;
            scrollingMe.style.scrollBehaviour = 'smooth';
        })