import './import/select.js';
import './import/swiper.js';
import './import/tabs.js';

// Якорь
$('.intro__btn').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});
// блок локации
// $('.header__block__location').on('click', function() {
//   $('.header__block__location__menu').addClass('active');
// });
// $('').on('click', function() {
//   if()
//   $('.header__block__location__menu').removeClass('active');
// });
$('.header__block__location').click(function() {
  // $(this).toggleClass("active");
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).find($('a')).slideUp();
  } else
    active($(this));
});

function active(crr) {
  $('.header__block__location').removeClass('active');
  $('.header__block__location__menu').slideUp();
  crr.addClass('active');
  crr.find($('a')).slideDown();
}
$(document).on('click', function() {
  if ($(event.target).closest('.header__block__location').length === 0) {
    $('.header__block__location').removeClass('active');
  }
});
