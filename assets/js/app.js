var navbar=document.querySelector('.navbar');
window.addEventListener('scroll',function(){
    navbar.classList.toggle('navbar-js',window.scrollY>0)
})
