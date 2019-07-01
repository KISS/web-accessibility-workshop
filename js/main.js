$(document).ready(function () {
  $('.js-banner .close').on('click', function (e) {
    $('.banner').addClass('hide');
  });

  $('.section-aside .js-link').on('click', function (e) {
    // https://github.com/kiss/web-accessibility-workshop
    window.open('https://github.com/kiss');
  });
});