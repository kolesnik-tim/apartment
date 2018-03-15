//pop-up
$('#stub-pop-up').parent().click(function(e) {
  e.preventDefault();
});

$('#stub-pop-up').on('click', function() {
  $('.pop-up-bg').fadeIn();
  $('#stub').fadeIn();
});
$('.pop-up__close').on('click', function() {
  $('.stub-pop-up').fadeOut();
  $('.pop-up-bg').fadeOut();
});

