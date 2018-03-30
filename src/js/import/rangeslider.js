import rangeslider from 'ion-rangeslider';


$('#cost').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 95000,
  from: 20000,
  to: 70000,
  hide_min_max: true,
  hide_from_to: false,
  grid: false,
  min_interval: 1000,
  step: 1000,
  onChange: function(data) {
    let from = $('.from');
    let to = $('.to');
    from.val(data.from);
    to.val(data.to);
  },
});
var slider = $('#cost').data('ionRangeSlider');

$('.from, .to').keyup(function() {
  slider.update({
    from: $('.from').val(),
    to: $('.to').val(),
  });
});





// $('#cost1').ionRangeSlider({
//   type: 'double',
//   min: 0,
//   max: 95000,
//   from: 20000,
//   to: 70000,
//   hide_min_max: true,
//   hide_from_to: false,
//   grid: false,
//   min_interval: 1000,
//   step: 1000,
//   onChange: function(data) {
//     let from = $('.from1');
//     let to = $('.to1');
//     from.val(data.from);
//     to.val(data.to);
//   },
// });
// var slider = $('#cost1').data('ionRangeSlider');

// $('.from1, .to1').keyup(function() {
//   slider.update({
//     from: $('.from1').val(),
//     to: $('.to1').val(),
//   });
// });

