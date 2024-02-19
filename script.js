
//===========================SCROLL ANIMATIONS===================================
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.main-title, .section-title', { delay: 500});
ScrollReveal().reveal('.home .image, .info', { delay: 600, origin:'left'});
ScrollReveal().reveal('.home .text-box, .products .image', { delay: 700, origin:'right'});
ScrollReveal().reveal('.media-icons i', { delay: 500, origin:'bottom', interval:200});
ScrollReveal().reveal('.about .image ', { delay: 500, origin:'top',});
ScrollReveal().reveal('.media-info li', { delay: 500, origin:'left', interval:200});
ScrollReveal().reveal('.img-card', { delay: 500, origin:'bottom', interval:300});

//===========================NAV BAR ANIMATION===================================

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
