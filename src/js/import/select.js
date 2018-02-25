import Select from 'tether-select';

//select intro
$(window).on('load resize', function() {
  if ($(window).width() >= '767') {
    $('select.select-last').each(function() {
      var selectInstance = new Select({
        el: this,
        className: 'select-theme-default',
      });
    });
  }
});
