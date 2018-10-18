console.log('here!');
$('.sample').each(function (i, ele) {
  $(ele).on('click', function (e) {
    let img = new Image();
    img.src = $(ele).css('background-image').replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'');
    console.log('click');
    $('#image-view').html(img).addClass('active').on('click', function(e) {
      $('#image-view img').on('click', function(e) {
        e.stopPropagation();
      });
      $('#image-view').removeClass('active');
    })
  })
});