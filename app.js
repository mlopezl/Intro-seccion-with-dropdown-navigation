const hamburgerIcon = document.querySelector('.header__hamburger');
const closeIcon = document.querySelector('.menu__close');
const menuMobile = document.querySelector('.menu__mobile');
const features = document.getElementById('features');
const company = document.getElementById('company');
const featureArrow = document.getElementById('features-arrow');
const companyArrow = document.getElementById('company-arrow');
const featureMenu = document.getElementById('features-menu');
const companyMenu = document.getElementById('company-menu');

hamburgerIcon.addEventListener('click', () =>{
    menuMobile.classList.remove('hidden');
});

closeIcon.addEventListener('click', () =>{
    menuMobile.classList.add('hidden');
});

features.addEventListener('click', () =>{
   if(featureMenu.style.display === 'none'){
    featureMenu.style.display = 'flex';
    featureArrow.src = './images/icon-arrow-up.svg';
   } else{
    featureMenu.style.display = 'none';
    featureArrow.src = './images/icon-arrow-down.svg';
   }
});

company.addEventListener('click', () =>{
   if(companyMenu.style.display === 'none'){
    companyMenu.style.display = 'flex';
    companyArrow.src = './images/icon-arrow-up.svg';
   } else{
    companyMenu.style.display = 'none';
    companyArrow.src = './images/icon-arrow-down.svg';
   }
})