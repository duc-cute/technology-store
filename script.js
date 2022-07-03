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
    showSlides(slideIndex);
    function currentSlide(n) {
        showSlides(slideIndex=n);
    }
// Counter Up
var listCounter=document.querySelectorAll('.counter-item')
function counter(el) {
    var numberEL=el.querySelector('.number');
    var to=parseInt(numberEL.innerText);
    var count=0;
    const time=1000;
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
    },2000);

})
// Model Sign-Up
var btnsLoginModel=document.querySelectorAll('.header__navbar-login-js');
var btnsCloseModel=document.querySelectorAll('.model-close-btn-js')

var btnSignUpModelReturn=document.querySelector('.btn-sign-up-js');
var btnLoginModelReturn=document.querySelector('.btn-login-return-js');

var modelLogin=document.querySelector('.login-model-js');
var modelSignUp=document.querySelector('.sign-up-model-js');

var modelAccout=document.querySelector('.model__account-js');
var modelBody=document.querySelector('.model-body-js');


function hideLogin() {
    modelAccout.classList.remove('open'); 
}
function showLogin() {
    modelAccout.classList.add('open');
    modelSignUp.style.display='none';
    modelLogin.style.display='block';   
}
function showSignUp() {
    modelLogin.style.display='none';
    modelSignUp.style.display='block';
}

//Show and Hide Login
for(var btn of btnsLoginModel) {
    btn.addEventListener('click',showLogin);
}
btnLoginModelReturn.addEventListener('click',showLogin);

//Show and Hide SignUp
btnSignUpModelReturn.addEventListener('click',showSignUp);

//Event
for(var i=0;i<btnsCloseModel.length;i++) {
    btnsCloseModel[i].addEventListener('click',hideLogin);
}
modelAccout.addEventListener('click',hideLogin);

modelLogin.addEventListener('click',function(e) {
    e.stopPropagation();
})

modelSignUp.addEventListener('click',function(e) {
    e.stopPropagation();
})
//Cart empty 
var cartList=document.querySelector('.cart__list-js');
var cartListBtn=document.querySelector('.cart__list-btn');
cartListBtn.addEventListener('click',function() {
    var isContain=cartList.classList.contains('open');
    if(isContain) {
        cartList.classList.remove('open');

    }else {
        cartList.classList.add('open');

    }
})
//Menu Tablet
var menuHeaderTablet=document.querySelector('.header__menu-icon-js');
var headerSubMenu=document.querySelector('.header__list-menu-tablet');
menuHeaderTablet.addEventListener('click',function() {
    var isContain=headerSubMenu.classList.contains('open');
    if(isContain) {
        headerSubMenu.classList.remove('open');
    }else {
        headerSubMenu.classList.add('open');

    }
    headerSubMenu.addEventListener('click',function(e) {
        e.stopPropagation();
    })
})
//Notify Tablet 
var btnNotifyTablet=document.querySelector('.menu__item-notify-js');
var notifyModel=document.querySelector('.notify__header-text-tablet');
var main=document.querySelector('.main');
function hideNotify() {
    notifyModel.classList.remove('open');
}
function showNotify() {
    notifyModel.classList.add('open');
}

btnNotifyTablet.addEventListener('click',function() {
    var isContain=notifyModel.classList.contains('open');
    if(isContain) {
        hideNotify();
    }else {
        showNotify();
    }
})
main.addEventListener('click',hideNotify);
notifyModel.addEventListener('click',function(e) {
    e.stopPropagation();
})
//select category
var btnSelect=document.querySelector('.select__input-js');
var btnSelectPrices=document.querySelector('.select__input-sort-js');
var selectInputList=document.querySelector('.select__input-list-js');
var selectInputPrices=document.querySelector('.select__input-list-price-js');
function hideSelectInput() {
    selectInputList.classList.remove('open');
}
function showSelectInput() {
    selectInputList.classList.add('open');
}
function hideSelectPrices() {
    selectInputPrices.classList.remove('open');
}
function showSelectPrices() {
    selectInputPrices.classList.add('open');
}

btnSelect.addEventListener('click',function() {
    var isContain=selectInputList.classList.contains('open');
    if(isContain) {
        hideSelectInput();
    }else {
        showSelectInput();
    }
})
selectInputList.addEventListener('click',function(e) {
    e.stopPropagation();
})
btnSelectPrices.addEventListener('click',function() {
    var isContain=selectInputPrices.classList.contains('open');
    if(isContain) {
        hideSelectPrices();
    }else {
        showSelectPrices();
    }

})
main.addEventListener('click',hideSelectPrices);
// notifyModel.addEventListener('click',function(e) {
//     e.stopPropagation();
// })







    
    


   


