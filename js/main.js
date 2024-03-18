(function($) {
    "use strict";
    
    var cfg = {
        scrollDuration : 800,
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc' 
    },

    $WIN = $(window);

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    if (!Modernizr.svg) {
        $(".home-logo img").attr("src", "images/logo.png");
    }

    var ssPreloader = function() {
        $("html").addClass('ss-preload');
        $WIN.on('load', function() {
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        });
    };

    var ssInfoToggle = function() {
        $('.info-toggle').on('click', function(event) {
            event.preventDefault();
            $('body').toggleClass('info-is-visible');
        });
    };
    var ssSlickSlider = function() {
        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });
    };

    var ssPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };

    var ssFinalCountdown = function() {
        var finalDate = new Date("February 6, 2025 00:00:00").getTime();
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
        ssPreloader();
        ssInfoToggle();
        ssSlickSlider();
        ssPlaceholder();
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
        opacity: "0"
    }, 500);
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