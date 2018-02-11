const gallery = {
  img: {
    y17: [
      '170315',
      '170726',
      '170729',
      '170814',
      '170921',
      '171001',
      '171222'
    ],
    y18: [
      '180104',
      '180121',
      '180127',
      '180129',
      '180205',
      '180210'
    ]
  },
  timestamp: function (i) {
    let parts = i.match(/.{1,2}/g);
    return (parts[1] + ' ' + parts[2] + ' ' + parts[0])
  },
  init: function () {
    for (let k in this.img) {
      $('.barba-container .gallery').append(
        '<h3>' +
        (k).replace('y', '20') +
        '</h3>' +
        '<div class="gallery-cont" id="' + k + '"></div>'
      );
      this.img[k].forEach((i) => {
        let img = new Image(50, 50);
        img.src = 'assets/gallery/ico/' + i + '.png';
        img.title = this.timestamp(i);
        img.id = 'i' + i;
        $('.barba-container .gallery #' + k).append(img);
        $('#i' + i).on('click', function () {
          let bigImg = new Image();
          bigImg.src = 'assets/gallery/full/' + i + '.png';
          bigImg.draggable = false;
          $('.modal-desc').removeClass('active');
          $('.modal-contents').html('');
          $.get('assets/gallery/desc/' + i + '.txt')
          .done(function(data) {
            $('.modal-desc').html(data).addClass('active');
          });
          $('.modal-contents').append(bigImg);
          $('.modal-wrapper').addClass('active');
          $('.modal-leave').on('click', () => {
            $('.modal-wrapper').removeClass('active');
          });
        });
      });
    }
  }
}

$(document).ready(function () {gallery.init(); tip.load();})
