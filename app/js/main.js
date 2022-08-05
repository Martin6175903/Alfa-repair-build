$(".cases__item-img").each(function () {
   var $img = $(this);
   var imgClass = $img.attr("class");
   var imgURL = $img.attr("src");

   $.get(imgURL, function (data) {
      var $svg = $(data).find("svg");

      if (typeof imgClass !== "undefined") {
         $svg = $svg.attr("class", imgClass + " replaced-svg");
      }

      $svg = $svg.removeAttr("xmlns:a");

      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
         $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
      }

      $img.replaceWith($svg);
      
   }, "xml");
});

window.onload = function () {
   let sliderItemActiveBg = document.querySelector('.cases__house:first-of-type');
   sliderItemActiveBg.classList.add("cases__house--active");
   // sliderItemActiveBg.style.background = "#319F1C";
   // sliderItemActiveBg.lastElementChild.style.color = '#fff';
};

$(".slider__items").slick({
   slidesToShow: 1,
   infinite: false,
   prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="images/page2/slider-arrow-left.svg" alt="Prev"></button>',
   nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="images/page2/slider-arrow-right.svg" alt="Next"></button>'
});

document.querySelector('.cases__houses').addEventListener('click', function(event) {
   let target = event.target;

   if (target.tagName == 'DIV') return 0;
   if (target.tagName != 'BUTTON') target = target.parentElement;
   if (target.tagName != 'BUTTON') target = target.parentElement;
   if (target.classList.contains('cases__house--active')) return 0;

   let itemCase = document.querySelectorAll('.cases__house');
   let targetIndex;

   for (let i = 0; i < itemCase.length; i++) {
      if (itemCase[i].classList.contains('cases__house--active')) {
         itemCase[i].classList.remove('cases__house--active');
         target.classList.add('cases__house--active');
      }
      if (itemCase[i].classList.contains('cases__house--active')) {
         targetIndex = i;
      }
   }
   console.log(targetIndex);
   $('.slider__items').slick('slickGoTo', targetIndex);
});




   $('[data-fancybox]').fancybox({
      youtube : {
         controls : 0,
         showinfo : 0
      }
});



