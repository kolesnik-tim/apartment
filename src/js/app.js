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
