//pop-up
$('#stub-pop-up').parent().click(function(e) {
  e.preventDefault();
});

$('#stub-pop-up').on('click', function() {
  // $('.mobile-menu__bg').fadeIn();
  $('#stub').fadeIn();
  console.log('erferf');
});
$('.pop-up__close').on('click', function() {
  $('.pop-up').fadeOut();
  $('.mobile-menu__bg').fadeOut();
});

