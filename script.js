let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let wrapper = document.querySelector('.wrapper');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.hero-img',{delay:450,origin:'top'});
sr.reveal('#yujipic',{delay:450,origin:'top'});
sr.reveal('.icons',{delay:500,origin:'left'});
sr.reveal('.scroll-down',{delay:200,origin:'right'});
sr.reveal('.animeimg',{delay:200,origin:'top'})
sr.reveal('.animeimg1',{delay:200,origin:'top'})