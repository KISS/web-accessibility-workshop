$(document).ready(function () {
  $('.js-banner .close').on('click', function (e) {
    $('.banner').addClass('hide');
  });

  $('.section-aside .js-link').on('click', function (e) {
    window.open('https://github.com/kiss/web-accessibility-workshop');
  });

  $('.form-subscribe .button').on('click', function (e) {
    const $inputs = $('.form-subscribe input');
    let valid = true;

    for (let i = 0; i < $inputs.length; i++) {
      console.log($inputs[i].classList)
      if (!$inputs[i].validity.valid) {
        valid = false;
        $inputs[i].classList = ('error');
      } else {
        $inputs[i].classList = ('');
      }
    }

    if (!valid) {
      $('.form-subscribe .error').show();
    } else {
      $('.form-subscribe input').val('');
      $('.form-subscribe input[type=checkbox]').prop('checked',false);

      $('.form-subscribe .error').hide();
      $('.form-subscribe .success').show();
    }
  });
});