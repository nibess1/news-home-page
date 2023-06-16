const closeBtn = document.querySelector('.close');
const menuBtn = document.querySelector('.menu')
const navBar = document.querySelector('#nav')


    menuBtn.addEventListener('click', function() {
    navBar.style.display = "block"
    })

    closeBtn.addEventListener('click', function() {
    navBar.style.display = 'none';
})
window.addEventListener('click', function(e) {
    if(e.target === navBar) {
        navBar.style.display = 'none'
    } 
})
