/*  Created by http://caebbage.github.io, please do not remove credits.

    This work is licensed under a Creative Commons
    Attribution-NonCommercial-ShareAlike 4.0 International License.
        https://creativecommons.org/licenses/by-nc-sa/4.0                 */

var structure = '<div class="controls"><i class="play fa fa-play-circle-o fa-fw"></i><i class="pause fa fa-pause-circle-o fa-fw"></i><i class="load fa fa-refresh fa-spin fa-fw"></i><i class="error fa fa-exclamation-triangle fa-fw"></i></div><div class="time"><span class="curr">00:00</span>/<span class="full">00:00</span></div><div class="scrubber"><div class="progress"></div><div class="scrub"></div></div><div class="errmessage">Oops! Something went wrong.</div></div>';

var musicjs = function() {
  $(".music").each(function(i, ele) {
    $(ele).prepend(structure);
    var contr =$(ele).find(".controls");
    var audio = $(ele).find('audio');
    var scrub = $(ele).find('.scrubber');
    var prog = scrub.find('.progress');
    var btn = scrub.find('.scrub');
    var max = 0;
    var playing = false;

    contr.addClass("loading");

    audio.ready(function() {
      contr.removeClass("loading").addClass("paused");
    }).on("canplay", function() {
      max = this.duration;
      $(ele).find(".full").html(timeCode(max));
    }).on("timeupdate", function() {
      var time = this.currentTime;
      var timestamp = timeCode(time);
      $(ele).find(".curr").html(timestamp);
      var progress = scrub.width() * (time / max);
      prog.css("width", (progress + "px"));
    }).on("error", function() {
      contr.removeClass().addClass('controls error');
    });

    contr.click(function() {
      if ($(ele).find(".full").html() == "00:00") {
        max = this.duration;
        $(ele).find(".full").html(timeCode(max));
      }

      if ($(this).hasClass("error")) {
        return; // if you are an error, fuck off
      } if ($(this).hasClass("paused")) {
        $(this).removeClass('paused').addClass('playing');
        audio.trigger("play");
        playing = true;
      } else if ($(this).hasClass("playing")) {
        $(this).removeClass('playing').addClass('paused');
        audio.trigger("pause");
        playing = false;
      }
    });

    btn.mousedown(function(e) {
      e.preventDefault();
      $(document).mousemove(function() {
        var x = (event.pageX - scrub.offset().left) + $(window).scrollLeft();
        prog.css("width", ((x - Math.ceil(btn.outerWidth() / 2)) + "px"));

        $(audio)[0].currentTime = max * ((x - Math.ceil(btn.outerWidth() / 2)) / scrub.width());
      }).mouseup(function() {
        $(document).unbind('mousemove');
        if(playing) {audio.trigger("play")}
      });
    }).mouseup(function() {
      $(document).unbind('mousemove');
      if(playing) {audio.trigger("play")}
    });

    scrub.click(function(e) {
      e.preventDefault();
      var x = (event.pageX - scrub.offset().left) + $(window).scrollLeft();
      prog.css("width", ((x - Math.ceil(btn.outerWidth() / 2)) + "px"));
      $(audio)[0].currentTime = max * ((x - Math.ceil(btn.outerWidth() / 2)) / scrub.width());
      if(playing) {audio.trigger("play")}
    });
  });
}

function timeCode(n) {
  var sec = pad(Math.floor(n % 60));
  var min = pad(Math.floor(n / 60));
  return "" + min + ":" + sec;
}

function pad(n) {return (n < 10) ? ("0" + n) : n;}

$(document).ready(function() {musicjs();});