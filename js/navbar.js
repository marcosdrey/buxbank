const divInfos = document.querySelector('.top__navigation-infos');
const menuIcon = document.querySelector('.menu')

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('rotate-menu')
    if(divInfos.classList.contains('hidden')) {
        divInfos.classList.remove('hidden')
    } else {
        divInfos.classList.add('hidden')
    }
})

window.addEventListener('resize', ()=> {
    menuIcon.classList.remove('rotate-menu')
    if(window.innerWidth <= 630) {
        menuIcon.classList.remove('hidden')
        divInfos.classList.add('hidden')
    } else {
        menuIcon.classList.add('hidden')
        divInfos.classList.remove('hidden')
    } 
})