// select all the panels
const imgCont = document.querySelectorAll('.panel');

// add event listener to add active class
imgCont.forEach(img =>{
  img.addEventListener('click',()=>{
    //remove active class
    removeActiveClasses()
    //add active class
    img.classList.add('active')
  })
})
//remove all the classes from the image container
function removeActiveClasses(){
  imgCont.forEach(img =>{
    img.classList.remove('active')
  })
}