// put together by cae
// please ask before using and give credit
// I suck at coding
// danku


var structure = '<div class="controls"><i class="play fas fa-play-circle fa-fw"></i><i class="pause fas fa-pause-circle fa-fw"></i><i class="load fas fa-sync fa-spin fa-fw"></i><i class="error fas fa-exclamation-triangle fa-fw"></i></div><div class="time"><span class="curr">00:00</span>/<span class="full">00:00</span></div><div class="scrubber"><div class="progress"></div><div class="scrub"></div></div><div class="errmessage">Oops! Something went wrong.</div></div>';
var hasScrub = true;
var hasStamp = true;

var musicjs = function() {
    $("audio").each(function(i, ele) {
        if (!$(ele).parent().hasClass("music")) {
            $(ele).wrap("<div class=\"music\"></div>");
        }
    })
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
            if (hasStamp) {
                $(ele).find(".full").html(timeCode(max));
            }
        }).on("timeupdate", function() {
            var time = this.currentTime;
            if (hasStamp) {
                var timestamp = timeCode(time);
                $(ele).find(".curr").html(timestamp);
            }
            if (hasScrub) {
                var progress = scrub.width() * (time / max);
                prog.css("width", (progress + "px"));
            }
        }).on("error", function() {
            contr.removeClass().addClass('controls error');
        });
        contr.click(function() {
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
        if (hasScrub) {
            btn.mousedown(function(e) {
                e.preventDefault();
                $(document).mousemove(function() {
                    var x = (event.pageX - scrub.offset().left) + $(window).scrollLeft();
                    prog.css("width", ((x - Math.ceil(btn.outerWidth() / 2)) + "px"));
                    if (hasStamp) {
                        $(audio)[0].currentTime = max * ((x - Math.ceil(btn.outerWidth() / 2)) / scrub.width());
                    }
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
        }
    });
}
function timeCode(n) {
    var sec = pad(Math.floor(n % 60));
    var min = pad(Math.floor(n / 60));
    return "" + min + ":" + sec;
}
function pad(n) {return (n < 10) ? ("0" + n) : n;}