//Open category
var categoryOtion=document.querySelector('.header__search-selection-js');
var menuCategory=document.querySelector('.category__menu-js');

    categoryOtion.addEventListener('click',function() {
         let isContain=menuCategory.classList.contains('open');
            if(isContain) {
                menuCategory.classList.remove('open');
            }else {
                menuCategory.classList.add('open');
                // menuCategory.style.animation=`growUp .3s linear`
            }
    })

//Slider
    var slideIndex=1;
    showSlides(slideIndex);
    function currentSlide(n) {
        showSlides(slideIndex=n);
    }
    function showSlides(n) {
        var i;
        var slides=document.querySelectorAll('.myslides');
        var dots=document.querySelectorAll('.dot');
        if(n>slides.length) {
            slideIndex=1;
        }
        if(n < 1) {
            slideIndex=slides.length;
        }
        for(i=0;i<slides.length;i++) {
            slides[i].style.display='none';
        }
        for(i=0;i<dots.length;i++) {
            dots[i].className=dots[i].className.replace(' active', '');
        }
        slides[slideIndex-1].style.display='block';
        dots[slideIndex-1].className += ' active';
    }
// Counter Up
var listCounter=document.querySelectorAll('.counter-item')
function counter(el) {
    var numberEL=el.querySelector('.number');
    var to=parseInt(numberEL.innerText);
    var count=0;
    const time=200;
    var step=Math.floor(to/time);
    var counting=setInterval(function() {
        count+=step;
        if(count>to) {
            clearInterval(counting);
            numberEL.innerText=to;
        }else {
            numberEL.innerText=count;
        }
    },1);


}
// IntersectionObserver
const objectsever=new IntersectionObserver(entries =>{
   entries.forEach(entry=>{
    const {target} =entry;
    counter(target);
    objectsever.unobserve(target);
   })
})
listCounter.forEach(item =>{
    setTimeout(function() {
        objectsever.observe(item);
    },1000);

})
    
    


   


