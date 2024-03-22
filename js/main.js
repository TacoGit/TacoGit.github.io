(function($) {
    "use strict";
    
    var cfg = {
        scrollDuration : 800,
        mailChimpURL   : 'https://tanos.is-a.dev' 
    },

    $WIN = $(window);

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    var ssFinalCountdown = function() {
        var finalDate = new Date("February 5, 2025 23:59:59").getTime();
        $('.home-content__clock').countdown(finalDate)
        .on('update.countdown finish.countdown', function(event) {
            var str = '<div class=\"top\"><div class=\"time days\">' +
                      '%D <span>day%!D</span>' + 
                      '</div></div>' +
                      '<div class=\"time hours\">' +
                      '%H <span>H</span></div>' +
                      '<div class=\"time minutes\">' +
                      '%M <span>M</span></div>' +
                      '<div class=\"time seconds\">' +
                      '%S <span>S</span></div>';

            $(this)
            .html(event.strftime(str));
        });
    };

    (function ssInit() {
        ssFinalCountdown();
    })();
})(jQuery);

function archivey() {
    projects()
    document.getElementById("tanosprojects").textContent = "tanos - archived projects"
    document.getElementById("projectstext").textContent = "all these projects are abandoned, i will not return"
    document.getElementById("fff").textContent = "(scroll down)"

    document.getElementById("pp").style.display = "none";
    document.getElementById("achd").style.display = "block";
}

function projects() {
    $("#home").animate({
        opacity: "0",
    }, 500);
    $("#home").css({
        '-webkit-filter': 'blur(8px)'
    }).animate({}, 1000);
    setTimeout(function () {
        document.getElementById("home").style.display = "none";
    }, 500);
    $("#projects").animate({
        opacity: "1"
    }, 500);
    setTimeout(function () {
        document.getElementById("projects").style.display = "block";
    }, 500);
}