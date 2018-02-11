

$(document).ready(function () {
  if (Cookies.get('dark')) {
      $('body').addClass('dark');
  }

  $('#lights').on('click', function () {
    if ($('body').hasClass('dark')) {
      $('body').removeClass();
      Cookies.remove('dark');
    } else {
      $('body').addClass('dark');
      Cookies.set('dark', 'why are you looking at this?', {expires: 90})
    }
  });
});
