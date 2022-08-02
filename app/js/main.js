
   $(".slider__items").slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="images/page2/slider-arrow-left.svg" alt="Prev"></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="images/page2/slider-arrow-right.svg" alt="Next"></button>'
   });


   window.onload = function () {
      let sliderItemActiveBg = document.querySelector('.cases__house:first-of-type');
      sliderItemActiveBg.classList.add(".cases__house--active");
      let objStyles = {
         background: '#319F1C',
         color: '#fff',
         fill: "white"
      }
      
};
