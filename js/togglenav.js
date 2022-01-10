let toggleStatus = false
let toggleBtn =document.querySelector('.togglenav')
let doToggleNav = ()=>{
    let togglemenu = document.querySelector('.phone-menu')
    let togglemain = document.querySelector('.phone-menu ul')
    let mainitems = document.querySelectorAll('.phone-menu a')
    let toggleend = document.querySelector('.end-nav')

    if(toggleStatus == false){
        togglemenu.style.width ='15vh'
        togglemain.style.visibility = 'visible'
        toggleend.style.visibility = 'visible'

        let arrayLength = mainitems.length
        for(let i=0 ;i < arrayLength ;i++){
            mainitems[i].style.opacity = '1'
            
        }

        toggleStatus = true

    }else if(toggleStatus == true){
        togglemenu.style.width ='0vh'
        togglemain.style.visibility = 'hidden'
        toggleend.style.visibility = 'hidden'

        let arrayLength = mainitems.length
        for(let i=0 ;i < arrayLength ;i++){
            mainitems[i].style.opacity = '0'
        }

        toggleStatus = false

    }
}
toggleBtn.addEventListener('click' , ()=>{
    doToggleNav()
})

