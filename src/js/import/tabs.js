// tabs work
$('ul.work__tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.work__tabs').find('div.work__tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
