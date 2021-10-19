/************** Humburger Style *******************/
//let style = window.getComputedStyle(element, '::before')
//let color = style.getPropertyValue('background-color')

var centralLine = document.querySelector(".humburgerMidle");
var contentHumburger = document.querySelector(".containerMenuHumburger");
var elBefore = window.getComputedStyle(contentHumburger, ':before')

var humbergerBefore = centralLine.querySelector('::before');

contentHumburger.addEventListener('click',function(evt,el){
    centralLine.style.animation = 'menuTransform 2s ease-in-out both';
    centralLine.style.setProperty('--animation12','menuHumburgerGauche 2s ease-in-out both');
    centralLine.style.setProperty('--animation11','menuHumbergerDroite 2s ease-in-out both');
})