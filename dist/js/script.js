$(document).ready(function(){
  $('.slider').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
  });

  $('[data-modal=request]').on('click', function(){
    $('.overlay, #request').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #request, #thanks').fadeOut('slow');
  });
  $('.button_question').on('click', function(){
    $('.overlay, #thanks').fadeIn('slow');
  })
});