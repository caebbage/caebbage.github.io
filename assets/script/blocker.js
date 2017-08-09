$(document).ready(function() {update();});
$('#submit').on('click', function () {update();});


function update() {
  var width = $('#width').val();
  var height = $('#height').val();
  var wrap = $('.wrapper');

  wrap.html('');

  wrap.append("<img class='image' src='" + $('#img').val() + "' />");
  var img = $('.image');

  img.one('load', function() {
    var w = img.width();
    var h = img.height();

    wrap.append("<table class='grid'>");
    var grid = $('.grid');
    grid.css('width', w + 'px');
    grid.css('height', h + 'px');

    for (i = 0; i < height; i++) {
      var string = "<tr>";
      for (j = 0; j < width; j++) {string += "<td></td>";}
      string += "</tr>";
      grid.append(string);
    }

    $('.wrapper').on('click', 'td', function() {
      $('.grid td').each(function(i, ele){$(ele).removeClass('clicked')});
      $(this).addClass('clicked');
    });
  });
}



function toggle() {
  var wrap = $('.wrapper');
  if (wrap.hasClass('dark')) {
    wrap.removeClass('dark');
    wrap.addClass('light');
  } else {
    wrap.removeClass('light');
    wrap.addClass('dark');
  }
}
