const content = document.querySelector('.content_card')
const descrMenu = document.querySelector('.first')
const back = document.querySelector('.back')

let contentW = content.offsetWidth
let wirina = document.documentElement.clientWidth
let myMarg = (wirina - contentW) / 2
let toShowContent = false


descrMenu.addEventListener('click', ()=>{
  wirina = document.documentElement.clientWidth

  if(wirina > 900){
    content.style.left = myMarg + 'px'
  }
  if(wirina < 900){
    content.style.left = '5%'
  }
  toShowContent = true
})

back.addEventListener('click', ()=>{
  content.style.left = '-200%'
  toShowContent = false
})

window.addEventListener('resize', () => {
  wirina = document.documentElement.clientWidth
  contentW = contentW && content.offsetWidth
  myMarg = (wirina - contentW) / 2

  if(wirina > 900 && toShowContent){
    content.style.left = myMarg + 'px'
  }
  if(wirina < 900 && toShowContent){
    content.style.left = '5%'
  }
})

