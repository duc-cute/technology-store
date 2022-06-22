//Open category
var categoryListIcon=document.querySelector('.btn__search-js');
var categoryListText=document.querySelector('.text__search-js');
var headerModel=document.querySelector('.header__category-js');

var isContain=headerModel.classList.contains('open');

    if(isContain==true) {
        categoryListIcon.addEventListener('click',function() {
            headerModel.classList.remove('open');
        });
    }else if(isContain==false) {
        categoryListIcon.addEventListener('click',function() {
            headerModel.classList.add('open');
            });
    }
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
    const time=500;
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
    objectsever.observe(item);

})
    
    


   


