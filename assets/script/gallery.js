const gallery = {
  timestamp: function (i) {
    let parts = i.match(/.{1,2}/g);
    return (parts[1] + ' - ' + parts[2] + ' - ' + parts[0])
  },
  load: function () {
    $('.gallery:not(.loaded)').each(function (i0, ele0) {
      $(ele0).children('img').each(function (i1, ele1) {
        let id = (function () {
          let res = $(ele1).attr('src').split('/');
          res = res[res.length - 1].split('.')[0];
          return res;
        })();

        $(ele1).attr('title', gallery.timestamp(id)).on('click', function () {
          $('.modal-contents').html('<img src="assets/gallery/full/' + id + '.png" />');
          $('.modal-desc').removeClass('active');
          $.get(
            'assets/gallery/desc/' + id + '.txt',
            function(data) {
              $('.modal-desc').html(data).addClass('active');
            }).fail(function() {
              console.log('no description.');
          });
          $('.modal-wrapper').addClass('active');
          $('.modal-leave').on('click', () => {
            $('.modal-wrapper').removeClass('active');
          });
        });

      });
      $(ele0).addClass('loaded');
    });
    tip.load();
  }
};
