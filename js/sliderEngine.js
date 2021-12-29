let slidebox = document.querySelector('.slidebox')
let slides = document.querySelectorAll('.slideitem')
let dots = document.querySelectorAll('.dotitem')
let counter = 1
let timer = 3000

//main function
let slideSwitcher = ()=>{
    slides.forEach(slide => slide.classList.remove('active'))
    slides[counter].classList.add('active')
    dots.forEach(dot => dot.classList.remove('active'))
    dots[counter].classList.add('active')
}
//move slide (forward)
let goNext = ()=>{
    counter = (counter == slides.length -1) ? 0 : counter +1
    slideSwitcher()
}

//automaic movement
let autoMove = setInterval(goNext , timer)

//hover slidebox reactions
slidebox.addEventListener('mouseover' , e=>clearInterval(autoMove))
slidebox.addEventListener('mouseleave' , e=>autoMove = setInterval(goNext , timer))

//dots pointer action
dots.forEach((dotitem , index) => {
    dotitem.addEventListener('mouseover' , e=>{
        counter = index
        slideSwitcher()
    })
})