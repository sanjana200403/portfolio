// swipper
var swiper = new Swiper(".testimonial-wrapper", {
    loop:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

  

// ----------navbar js
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

if(navToggle){
    navToggle.addEventListener(('click'),()=>{
        navMenu.classList.add("show-menu")

    })
  }
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
// --remove menu
const navLinks = document.querySelectorAll('.nav-link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav link ,we remove the show menu class
    navMenu.classList.remove("show-menu")


}
navLinks.forEach(n => n.addEventListener('click',linkAction))
// change background header
function scrollHeader(){
  const header = document.getElementById("header")
  // when the scroll is greater than 80 viewport heigh,add the class scroll header to the tag
  if(this.scrollY >=80){
    header.classList.add("scroll-header")
  } 
  else{
    header.classList.remove("scroll-header")
  }
}
window.addEventListener('scroll',scrollHeader)

// ------theme/display customization--------
const theme = document.querySelector("#theme-button")
const themeModal = document.querySelector(".customize-theme")
// ----open modal
const openThemeModal =()=>{
  themeModal.style.display='grid';

}
theme.addEventListener('click',openThemeModal)
// close modal
const closeTheme =(e)=>{
  if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = "none"
  }
  

}
themeModal.addEventListener('click',closeTheme)

// ====font=========
const fontSizes =document.querySelectorAll('.choose-size span')

// remove active class
const removeSizeSelector=()=>{
  fontSizes.forEach(size=>{
    size.classList.remove('active')

  })
  
}

fontSizes.forEach(size=>{
  size.addEventListener('click',()=>{
     removeSizeSelector();
    let fontSizes;
    size.classList.toggle('active')
    if(size.classList.contains('font-size-1')){
      fontSizes = '12px'
    }
   else if(size.classList.contains('font-size-2')){
      fontSizes = '14px'
    }
    else if(size.classList.contains('font-size-3')){
      fontSizes = '16px'
    }
    else if(size.classList.contains('font-size-4')){
      fontSizes = '18px'
    }
document.querySelector('html').style.fontSize = fontSizes
console.log(fontSizes)
    // chnage font size of the root html element

  })
})
// ----color---------------
const colorPalette = document.querySelectorAll('.choose-color span')
var root =  document.querySelector(":root")

// remove active

const changeActive =()=>{
  colorPalette.forEach(colorPicker=>{
    colorPicker.classList.remove('active')
  })

}
colorPalette.forEach(color=>{
  color.addEventListener('click',()=>{
    changeActive()
    let primaryHue;
    if(color.classList.contains("color-1")){
      primaryHue = 252

    }
    else if(color.classList.contains("color-2")){
      primaryHue = 52

    }
    else if(color.classList.contains("color-3")){
      primaryHue = 352

    }
    else if(color.classList.contains("color-4")){
      primaryHue = 152

    }
    else if(color.classList.contains("color-5")){
      primaryHue = 202

    }
    color.classList.add('active')
    root.style.setProperty('--primary-color-hue',primaryHue)
    console.log(primaryHue)


  })
})
// ----background color
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg =()=>{
  root.style.setProperty('--light-color-lightness',lightColorLightness)
  root.style.setProperty('--white-color-lightness',whiteColorLightness)
  root.style.setProperty('--dark-color-lightness',darkColorLightness)

}

// change back ground color
bg2.addEventListener('click',()=>{
  darkColorLightness="95%"
  whiteColorLightness="20%"
  lightColorLightness="15%"
  bg2.classList.add('active');
  // remove active class
  bg1.classList.remove('active');
  bg3.classList.remove('active');
  changeBg()
})
bg3.addEventListener('click',()=>{
  darkColorLightness="95%"
  whiteColorLightness="10%"
  lightColorLightness="0%"
  bg3.classList.add('active');
  // remove active class
  bg1.classList.remove('active');
  bg2.classList.remove('active');
  changeBg()
})
bg1.addEventListener('click',()=>{
 
  
  bg1.classList.add('active');
  // remove active class
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  changeBg()
  // remove customize changes from local storage
  window.location.reload()
})
//=============== portfoio item filter==============
const filterContainer = document.querySelector(".portfolio-filter-inner")
const portFolioItem = document.querySelectorAll(".portfolio-item")
const totalPortFolioItem = portFolioItem.length
const filterBtns = filterContainer.children;
console.log(filterBtns)
const totalFilterBtn = filterBtns.length;
for(let i=0; i<totalFilterBtn; i++){
  filterBtns[i].addEventListener('click',function(){
    filterContainer.querySelector('.active').classList.remove('active')
    console.log(this.innerHTML)
    this.classList.add('active')

    const filterValue =  this.getAttribute("data-filter")
    console.log(filterValue)
    for(let k=0; k<totalPortFolioItem; k++){
if(filterValue === portFolioItem[k].getAttribute("data-category")){
  
  portFolioItem[k].classList.remove("hide")
  portFolioItem[k].classList.add("show")

}
else{
  portFolioItem[k].classList.add("hide")
  
  portFolioItem[k].classList.remove("show")

}
if(filterValue === "all"){
  portFolioItem[k].classList.remove("hide")
  portFolioItem[k].classList.add("show")

}
    }
  
    
  
  })
}
console.log(totalPortFolioItem)

// scroll section active link
const sections = document.querySelectorAll("section[id]")
console.log(sections)
window.addEventListener("scroll",navHighlighter);

function navHighlighter(){
  // get scroll position
  let scrollY = window.pageYOffset;
  // now we loop through section to get hight,top and value for each
  sections.forEach(current=>{
    const sectionHeight = current.offsetHeight
const sectionTop = current.offsetTop -80
const sectionId = current.getAttribute("id")
if(scrollY>sectionTop && scrollY<= sectionTop+sectionHeight){
document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link')
}
else{
  document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link')
 
  
}

  })


}




