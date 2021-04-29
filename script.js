const leftbtn=document.getElementById("left")
const rightbtn=document.getElementById("right")
const slides =document.querySelectorAll('.slide')
const body = document.body

let activeslide=0;



setbackground()
rightbtn.addEventListener('click',() =>
{     activeslide++
      if(activeslide>slides.length -1){
            activeslide=0;
      }
      setbackground()
      setactiveslide()
      
})
leftbtn.addEventListener('click',() =>
{     activeslide--
      if(activeslide<0){
            activeslide=slides.length;
      }
      setbackground()
      setactiveslide()
      
})

function setbackground()
{
      body.style.backgroundImage=slides[activeslide].style.backgroundImage
}

function setactiveslide() {
      slides.forEach((slide) => slide.classList.remove('active'))
    
      slides[activeslide].classList.add('active')
    }


