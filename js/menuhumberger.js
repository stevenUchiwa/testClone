/************** Humburger Style *******************/
//let style = window.getComputedStyle(element, '::before')
//let color = style.getPropertyValue('background-color')

const centralLine = document.querySelector(".humburgerMidle");
const contentHumburger = document.querySelector(".containerMenuHumburger");
const elBefore = window.getComputedStyle(contentHumburger, ':before');



contentHumburger.addEventListener('click',function(evt,el){
    centralLine.style.animation = 'menuTransform 2s ease-in-out both';
    centralLine.style.setProperty('--animation12','menuHumburgerGauche 2s ease-in-out both');
    centralLine.style.setProperty('--animation11','menuHumbergerDroite 2s ease-in-out both');
})