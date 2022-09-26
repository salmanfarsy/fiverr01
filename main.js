// slick js
$(document).ready(function(){
    $('.product-slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:`<div class="control prev"><ion-icon name="chevron-back-outline" ></ion-icon></div>`,
        nextArrow:`<div class="control next"><ion-icon name="chevron-forward-outline" ></ion-icon></div>`,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            }
           
          ]
    });
  })

//   responsive menu
const menubtn = document.querySelector('.menu-icon')
const closebtn = document.querySelector('.cross')
const catContainer = document.querySelector('.catagory-container')

menubtn.addEventListener('click', ()=>{
    catContainer.classList.toggle('on')
})

closebtn.addEventListener('click', ()=>{
    catContainer.classList.toggle('on')
})