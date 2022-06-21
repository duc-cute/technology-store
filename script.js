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
    


   


