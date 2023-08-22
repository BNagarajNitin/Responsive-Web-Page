const hamburger=document.querySelector('.hamburger'),
menu =document.querySelector('.nav-menu');
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')

    menu.querySelectorAll('.nav-item').forEach((item)=>{
        item.addEventListener('click',function(){
            hamburger.classList.remove('active')
            menu.classList.remove('active')
        })
    })
})