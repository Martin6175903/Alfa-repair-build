
   $(".slider__items").slick({
      slidesToShow: 1,
      infinite: false,
      prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="images/page2/slider-arrow-left.svg" alt="Prev"></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="images/page2/slider-arrow-right.svg" alt="Next"></button>'
   });


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

