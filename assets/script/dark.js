

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
      Cookies.set('dark', 'why_are_you_looking_at_this?', {expires: 90})
    }
  });
});
