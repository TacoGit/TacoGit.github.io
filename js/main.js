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

function fpsa() {
    var contentsfps = document.getElementById("contentsfps");
    var elementsToLoad = document.createRange().createContextualFragment(`<h3 id="tanosprojects">tanos - fps fixer beta.</h3>

            <h1 id="fpsquest">
            you will be answering a couple<br>
            questions to decide the best settings
            </h1>

            <p id="fpstxt" style="margin-top: 1rem;">Your answers will not be saved, please prevent from reloading the site 🙏</p>

            <div id="understandment">
                <button onclick="q_understood()">I understand that I will not reload the page.</button>
                <button onclick="window.location.reload()">I do not understand.</button>
            </div>

            <div style="display:none; opacity:0;" id="ram">
                <button onclick="q_ram('LOW')">2GB, 4GB, 6GB RAM</button>
                <button onclick="q_ram('HIGH')">8GB, 10GB, 12GB, 16GB RAM</button>
            </div>

            <div style="display:none; opacity:0;" id="defender">
                <button onclick="q_defender('KEEP')">Keep</button>
                <button onclick="q_defender('UNINSTALL')">Uninstall</button>
            </div>

            <div style="display:none; opacity:0;" id="bapps">
                <button onclick="q_bapps('KEEP')">Keep</button>
                <button onclick="q_bapps('UNINSTALL')">Uninstall</button>
            </div>

            <div style="display:none; opacity:0;" id="odantl">
                <button onclick="q_onetel('KEEP')">Keep</button>
                <button onclick="q_onetel('UNINSTALL')">Uninstall and Disable</button>
            </div>

            <div style="display:none; opacity:0;" id="shutup">
                <button onclick="q_shutup('RUN')">Run</button>
                <button onclick="q_shutup('DONT')">Do not run</button>
            </div>

            <div style="display:none; opacity:0;" id="grpc">
                <button onclick="q_graphicalcard('IRIS')">Intel Iris XE</button>
                <button onclick="q_graphicalcard('NVIDIA')">Any NVIDIA GPU</button>
                <button onclick="q_graphicalcard('OTHER')">Other</button>
            </div>

            <div style="display:none; opacity:0;" id="srvc">
                <button onclick="q_srv('YES')">Yes</button>
                <button onclick="q_srv('NO')">No</button>
            </div>

            <div style="display:none; opacity:0;" id="wind">
                <button onclick="q_win('11')">Windows 11</button>
                <button onclick="q_win('10')">Windows 10</button>
            </div>

            <div style="display:none; opacity:0;" id="add">
                <button onclick="q_add('YES')">Sure</button>
                <button onclick="q_add('NO')">No thanks</button>
            </div>

            <div id="teext" style="display: none;" class="expandable-textarea" role="textarea">
                # Input comes here
            </div>

            <div style="display: none; opacity:0;" id="downloads">
                <button onclick="q_download('script')" id="download">Download Optimizer Script</button>
                <button onclick="q_download('kms')" id="download">Windows Product Key Activator</button>
                <button onclick="q_download('gpedit')" id="gpd">Enable gpedit for windows 10 home</button>
                <button style="display: none;" onclick="q_download('defender')" id="defend">Uninstall Windows Defender tool</button>
                <button style="display: none;" onclick="q_download('nvcleanstall')" id="nvclean">NVIDIA Drivers cleaner tool</button>
                <button style="display: none;" onclick="q_download('iris')" id="iirs">Best Intel Iris XE drivers</button>
            </div>`);
    contentsfps.appendChild(elementsToLoad);
    $("#home").animate({
        opacity: "0"
    }, 500);
    setTimeout(function () {
        document.getElementById("home").style.display = "none";
    }, 500);
    $("#projects").animate({
        opacity: "0"
    }, 500);
    setTimeout(function () {
        document.getElementById("projects").style.display = "none";
    }, 500);
    $("#fps").animate({
        opacity: "1"
    }, 500);
    setTimeout(function () {
        document.getElementById("fps").style.display = "block";
    }, 500);
}

function body_loaded() {
    if (!localStorage.getItem("isPink"))
    {
        colorywoo() // found pink prettier 😊
    }
    if (localStorage.getItem("isPink") == "true") {
        color_pink_withoutStorage()
    }
}

function colorywoo() {
    var newColor
    if (localStorage.getItem("isPink") == "true") {
        newColor = '#44763B';
        document.getElementById("shomes").style.backgroundImage = "url(images/hero-bg.jpg)"
        document.documentElement.style.setProperty('--green', newColor);
        localStorage.setItem("isPink", "false");
    } else {
        newColor = '#974557';
        document.getElementById("shomes").style.backgroundImage = "url(images/puresakura.png)"
        document.documentElement.style.setProperty('--green', newColor);
        localStorage.setItem("isPink", "true");
    }
}

function color_pink_withoutStorage() {
    newColor = '#974557';
    document.getElementById("shomes").style.backgroundImage = "url(images/puresakura.png)"
    document.documentElement.style.setProperty('--green', newColor);
}
