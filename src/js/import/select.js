import Select from 'tether-select';

// select header
$('select.select-first').each(function() {
  var selectInstance = new Select({
    el: this,
    className: 'select-theme-location',
  });
});
//select intro
$('select.select-last').each(function() {
  var selectInstance = new Select({
    el: this,
    className: 'select-theme-default',
  });
});
