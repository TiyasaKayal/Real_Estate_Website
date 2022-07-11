/* CHANGE BACKGROUND HEADER*/
function scrollHeader(){
    const header =document.getElementById('header')
    if(this.scrollY >= 700) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}
    window.addEventListener('scroll',scrollHeader)


/* SWIPER POPULAR */
var swiper = new Swiper(".popular__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* VALUE ACCORDION */
const accordionItems =document.querySelectorAll('value__accordion-item')

accordionItems.forEach((item) =>{
  const accordionHeader =item.querySelector('.value__accordion-header')

  accordionHeader.addEventListener('click', () =>{
    const openItem = document.querySelector('.accordion-open')

     toggleItem(item)

     if(openItem && openItem!==item){
      toggleItem(openItem)
     }
  })
})
 const toggleItem = (item) =>{
      const accordionContent = item.querySelector('.value__accordion-content')

      if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
      }
      else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open')
      }

  
 }

/* SCROLL SECTIONS ACTIVE LINK */
const sections= document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY= window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
              sectionTop= current.offsetTop-58,
              sectionId= current.getAttribute('id')

       if(scrollY> sectionTop && scrollY<= sectionTop+ sectionHeight){
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
       }       
       else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
       }
    })
}
window.addEventListener('scroll' , scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp= document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
}

window.addEventListener('scroll' , scrollUp)


/* SCROLL REVEAL ANIMATION */
const sr=ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset:true,
  
  })
   sr.reveal('.home_title,.popularcontainer, .subscribecontainer, .footer_container')
   sr.reveal('.home_description,footer_info' ,{delay: 500})
   sr.reveal('.home__search',{delay: 600})
   sr.reveal('.home__value',{delay: 700})
   sr.reveal('.home__images',{delay: 800, origin: 'bottom'})
   sr.reveal('.logos__img',{interval:100})
   sr.reveal('.value_images .contact_content',{origin: 'left'})
   sr.reveal('.value_content,.contact_images',{origin: 'right'})
