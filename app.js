const hamburgerIcon = document.querySelector('.header__hamburger');
const closeIcon = document.querySelector('.menu__close');
const menuMobile = document.querySelector('.menu__mobile');
const features = document.getElementById('features');
const company = document.getElementById('company');
const featureArrow = document.getElementById('features-arrow');
const companyArrow = document.getElementById('company-arrow');
const featureMenu = document.getElementById('features-menu');
const companyMenu = document.getElementById('company-menu');
const body = document.getElementById('body');

hamburgerIcon.addEventListener('click', () =>{
    menuMobile.classList.remove('hidden');
    body.classList.add('overlay-activo');
});

closeIcon.addEventListener('click', () =>{
    menuMobile.classList.add('hidden');
    body.classList.remove('overlay-activo');
});

features.addEventListener('click', () =>{
   if(!featureMenu.classList.contains('hidden')){
    featureMenu.classList.add('hidden');
    featureArrow.src = './images/icon-arrow-up.svg';
   } else{
    featureMenu.classList.remove('hidden');
    featureArrow.src = './images/icon-arrow-down.svg';
   }
});


company.addEventListener('click', () =>{
   if(!companyMenu.classList.contains('hidden')){
    companyMenu.classList.add('hidden');
    companyArrow.src = './images/icon-arrow-up.svg';
   } else{
    companyMenu.classList.remove('hidden');
    companyArrow.src = './images/icon-arrow-down.svg';
   }
});

document.addEventListener("click", (e) => {
  if (
    !closeIcon.contains(e.target) &&
    !menuMobile.contains(e.target) &&
    !hamburgerIcon.contains(e.target)
  ) {
    menuMobile.classList.add("hidden");
    body.classList.remove("overlay-activo");
  }
});