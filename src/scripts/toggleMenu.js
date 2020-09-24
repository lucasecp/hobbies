(function handleClick(){
    const icon = document.querySelector('.icon-menu')
    const bgToggle = document.querySelector('.bg-toggle')
    const menu = document.querySelector('.menu')
    icon.addEventListener('click',()=>{
      menu.classList.toggle('active')
    })
    bgToggle.addEventListener('click',()=>{
        menu.classList.remove('active')
    })
})()


