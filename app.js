let hamburguer = document.getElementById('hambButton');
let menu = document.getElementById('navMenu');
let click = 0;
hamburguer.addEventListener('click', function(){
   
    if (click === 0) {
        menu.className = 'display-menu';
        click = 1;
    } else if(click === 1){
        menu.className = 'hidden-menu';
        click = 0;
    }
})

if (screen.width > 768) {
    menu.className = 'big-screen-nav';
    hamburguer.style.display = 'none';
}