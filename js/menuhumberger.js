/************** Humburger Style *******************/
//let style = window.getComputedStyle(element, '::before')
//let color = style.getPropertyValue('background-color')

const centralLine = document.querySelector(".humburgerMidle");
const contentHumburger = document.querySelector(".containerMenuHumburger");
const elBefore = window.getComputedStyle(contentHumburger, ':before');

var cmpAnimation = true;

console.log('affichage en premier');

contentHumburger.addEventListener('click',function(evt,el){
    if(cmpAnimation){
        centralLine.style.animation = 'menuTransform 1s ease-in-out normal 1 forwards';
        centralLine.style.setProperty('--animation12','menuHumburgerGauche 1s ease-in-out normal 1 forwards');
        centralLine.style.setProperty('--animation11','menuHumbergerDroite 1s ease-in-out normal 1 forwards');
        console.log('cmp',true);
        cmpAnimation = false;
    }else{
        centralLine.style.animation = 'menuTransformReverse 1s ease-in normal 1 forwards';
        centralLine.style.setProperty('--animation12','menuHumburgerGaucheReverse 1s ease-in normal 1 forwards');
        centralLine.style.setProperty('--animation11','menuHumbergerDroiteReverse 1s ease-in normal 1 forwards');
        console.log('cmp-----------',false);
        cmpAnimation = true;
    }
    
})