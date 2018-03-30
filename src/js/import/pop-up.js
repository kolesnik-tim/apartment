//pop-up spub
$('#stub-pop-up').parent().click(function(e) {
  e.preventDefault();
});

$('#stub-pop-up').on('click', function() {
  $('.pop-up-bg').fadeIn();
  $('#stub').fadeIn();
});
$('.pop-up-bg').on('click', function() {
  $('#stub').fadeOut();
  $('.pop-up-bg').fadeOut();
});



//pop-up
$('[data-pop]').on('click', function() {
  let href = $(this).attr('href');
  $('.pop-up').fadeOut();
  $('.pop-up-bg').fadeIn();
  $(href).fadeIn();
});
$('.pop-up__close').on('click', function() {
  $('.pop-up').fadeOut();
  $('.pop-up-bg').fadeOut();
});
