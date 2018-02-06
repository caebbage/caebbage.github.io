

$(document).ready(function () {
  if (Cookies.get('dark') == true) {
      $('body').addClass('dark');
  }

  $('#lights').on('click', function () {
    if ($('body').hasClass('dark')) {
      $('body').removeClass();
      Cookies.set('dark', false, {expires: 90})
    } else {
      $('body').addClass('dark');
      Cookies.set('dark', true, {expires: 90})
    }
  });
});
