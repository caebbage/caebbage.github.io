Barba.Pjax.Dom.wrapperId = 'wrapper'
Barba.Pjax.Dom.containerClass = 'content'

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },
  fadeOut: function() {
    return $(this.oldContainer).css('position','absolute').transition({ opacity: 0 }, 700);
  },

  fadeIn: function() {
    let tar =  (window.location.pathname || 'home').substring(1);
    if (tar == '') {tar = 'home'}

    $("nav ul li a").each(function (i, ele) {
      if (tar == $(ele).attr('id')) {
        $(ele).addClass('current');
      } else {
        $(ele).removeClass('current');
      }
    })
    
    var n = $(this.newContainer);
    $(this.oldContainer).css('display', 'none');

    n.css({opacity:0}).transition({ opacity: 1 }, 700);
    checkAll();
    
    this.done();
  }
});
Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

Barba.Pjax.start();

$(document).ready(function () {
  if (Cookies.get('night')) {
    $("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='night.css' type='text/css'>");
  }

  $('#switch').on('click', function () {
    if (Cookies.get('night')) {
      Cookies.remove('night')
      $("head link[rel='stylesheet']").last().remove();
    } else {
      Cookies.set('night', true)
      $("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='night.css' type='text/css'>");
    }
  })
});

function checkAll () {
  let tar =  (window.location.pathname || 'home').substring(1);
  if (tar == '') {tar = 'home'}
    $("nav ul li a").each(function (i, ele) {
      if (tar == $(ele).attr('id')) {
        $(ele).addClass('current');
      } else {
        $(ele).removeClass('current');
      }
    })

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
}

checkAll();
