const TopBar = document.querySelector(".headerSousMenu");
const logoSimple = document.querySelector(".logo");
const logoDark = document.querySelector('.logo-dark');

document.addEventListener("scroll",(element, env) =>{
     if(window.scrollY > 10){
         TopBar.classList.add("headerSousMenuWhite");
         logoDark.style.display = 'block';
         logoSimple.style.display= 'none';
     }else{
        TopBar.classList.remove("headerSousMenuWhite");
        logoDark.style.display = 'none';
        logoSimple.style.display= 'block';
     }
});

