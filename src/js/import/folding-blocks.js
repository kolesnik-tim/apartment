//header__location
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




//filter 1
$('.form__extra1 h4').click(function() {
  $('.form__extra1').toggleClass('active');
  if($('.form__extra1').hasClass('active')) {
    $('.form__extra1').find($('.form__extra__block')).slideDown();
  } else
    active1($('.form__extra1'));
});

function active1(crr) {
  $('.form__extra1 .form__extra__block').slideUp();
  crr.removeClass('active');
}



//filtrer 2
$('.form__extra2 h4').click(function() {
  $('.form__extra2').toggleClass('active');
  if($('.form__extra2').hasClass('active')) {
    $('.form__extra2').find($('.form__extra__block')).slideDown();
  } else
    active2($('.form__extra2'));
});

function active2(crr) {
  $('.form__extra2 .form__extra__block').slideUp();
  crr.removeClass('active');
}
