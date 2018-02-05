

$(document).ready(function () {
  if (Cookies.get('dark') === 1) {
      $('body').addClass('dark');
  }

  $('#lights').on('click', function () {
    if ($('body').hasClass('dark')) {
      $('body').removeClass();
      Cookies.set('dark', 0, {expires: 90})
    } else {
      $('body').addClass('dark');
      Cookies.set('dark', 1, {expires: 90})
    }
  });
});
