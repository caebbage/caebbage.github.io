/* code by twitter@caebbage / tumblr@asgr-memo
don't remove credits if you want to use please
or i'll find your house and fistfight you      */

var tip = {
  tooltip : null,
  init: function() {
    $('body').append('<div id="tooltip" style="opacity:0"></div>');
    this.tooltip = $('#tooltip');
    this.load();
  },
  load: function () {
    $("[title]").each((i,ele) => {
      var title = $(ele).attr('title');
      $(ele).removeAttr('title');
      $(ele).attr('data-title', title);
    });

    $("[data-title]").on('mouseenter', (e) => {
      var title = $(e.target).attr('data-title');
      this.tooltip.text(title).css({
        'opacity':1,
        'display':'block'
      });
      this.update(e);
    }).on('mousemove', (e) => {
      this.update(e);
      if ($(e.target).html() != this.tooltip.html()) {
        this.tooltip.text($(e.target).attr('data-title'));
      }
    }
  ).on('mouseleave', (e) => {
    this.tooltip.css('opacity', 0);
  });
},
update: (e) => {
  var x = (e.pageX - $(document).scrollLeft()), y = (e.pageY - $(document).scrollTop());
  var result = {
    'left': (((x + tip.tooltip.outerWidth()) > $(window).width())
    ? $(window).width() - tip.tooltip.outerWidth() - 5: x ) + 'px',
    'top': (((y + tip.tooltip.outerHeight()) > $(window).height())
    ? $(window).height() - tip.tooltip.outerHeight() - 5: y ) + 'px'
  };
  $(this.tooltip).css(result);
  }
};

$(document).ready(() => {tip.init()});
