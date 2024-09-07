(function($) {
    "use strict";

    var cfg = {
            scrollDuration: 800,
            mailChimpURL: 'https://tanos.is-a.dev'
        },

        $WIN = $(window);

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

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
        ssFinalCountdown();
    })();
})(jQuery);

// this should load faster than the jquery one!!!! but ensures the script exists
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("jsorono").innerHTML = "a random site<br> made for fun lol";
    updateLastFM()

    const currentTime = new Date().getHours();
    const greetingElement = document.getElementById("gdaygnight");

    if (currentTime >= 19 || currentTime <= 6) {
        greetingElement.textContent = "make sure to have a good night";
    } else {
        greetingElement.textContent = "make sure to make the most of your day";
    }
});

function projects() {
    $("#home").animate({
        opacity: "0",
    }, 500);
    $("#home").css({
        '-webkit-filter': 'blur(18px)'
    }).animate({}, 1000);
    setTimeout(function() {
        document.getElementById("home").style.display = "none";
    }, 500);
    $("#projects").animate({
        opacity: "1"
    }, 500);
    setTimeout(function() {
        document.getElementById("projects").style.display = "block";
    }, 500);
}

function fpsa() {
    var contentsfps = document.getElementById("contentsfps");
    var elementsToLoad = document.createRange().createContextualFragment(`<h3 id="tanosprojects">tanos - project fps fixer (browser ver.).</h3>

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
    setTimeout(function() {
        document.getElementById("home").style.display = "none";
    }, 500);
    $("#projects").animate({
        opacity: "0"
    }, 500);
    setTimeout(function() {
        document.getElementById("projects").style.display = "none";
    }, 500);
    $("#fps").animate({
        opacity: "1"
    }, 500);
    setTimeout(function() {
        document.getElementById("fps").style.display = "block";
    }, 500);
}

function s_a_p() {
    var buttons = document.querySelectorAll('.nonquality');

    buttons.forEach(function(button) {
        button.style.display = 'inline-block';
    });
}

function s_q_p() {
    var buttons = document.querySelectorAll('.nonquality');

    buttons.forEach(function(button) {
        button.style.display = 'none';
    });
}

function adjustTextonSizeChange() { // messy code i got it
    if (window.innerWidth <= 800) {
        document.getElementById("canbechangedbywindowpreferences").innerText = "bottom";
        document.getElementById("siteby").style.display = "none";
        document.getElementById("doonat").style.display = "none";
        document.getElementById("underlinetextredirectionsforthemodernpage").style.fontStyle = "normal"; // its for readablity on smaller devices
        document.getElementById("underlinetextredirectionsforthemodernpage").style.marginTop = "0px";
    } else {
        document.getElementById("canbechangedbywindowpreferences").innerText = "right";
        document.getElementById("siteby").style.display = "inline-block";
        document.getElementById("doonat").style.display = "inline-block";
        document.getElementById("underlinetextredirectionsforthemodernpage").style.fontStyle = "italic";
        document.getElementById("underlinetextredirectionsforthemodernpage").style.marginTop = "-23px";
    }
}

function updateLastFM(additional) {
    document.documentElement.style.filter = "invert(0)"; // Make sure any dark reader extension doesnt fuck ths up
    var cache = new LastFMCache(); // Request Cache

    var lastfm = new LastFM({
      apiKey    : '219c75f1150728c565372e20d648430e',
      apiSecret : 'eca874a2ba992f143fe5fa4c745c2351',
      cache     : cache
    });

    var playingSong = "...";

    // Load the current playing music, or the last played music
    lastfm.user.getRecentTracks({user: 'tanosshi'}, {success: function(data){
      try {
        var attemptAtConnection = data.recenttracks.track[0]["@attr"].nowplaying // i shall not overload the fm servers
      } catch {
        var attemptAtConnection = undefined;
      }

      if(attemptAtConnection == undefined || attemptAtConnection == null) {
        document.getElementById("titledFm").innerHTML = `tanos is currently not listening to anything <a id="fmInformant">∙ according to last.fm</a>`
        var sadSentences = [
            "how unfortunate !",
            "or last.fm could be down ?",
            "you'll live dont worry",
            "thats crazy"
        ];
        document.getElementById("playsngenreFm").innerHTML = `${sadSentences[Math.floor(Math.random() * sadSentences.length)]} <a id="fmPlays">, will automatically rebuild after activity found</a><a id="fmGenre"></a>`
      }
      else if(data.recenttracks.track.length > 0) {
        if (document.getElementById("titledFm").innerHTML == `tanos is currently not listening to anything <a id="fmInformant">∙ according to last.fm</a>`) {
            rebuildFm()
        }
        
        var lastTrack = data.recenttracks.track[0];

        var doCorruptReadability = 0;

        switch(lastTrack.artist['#text']) {
            case "Lamp / Lamp, Kaori Sakakibara / 榊原香保里 / サカキバラカオリ, Lamp / Lamp / ランプ, Taiyou Someya / 染谷大陽 / ソメヤタイヨウ":
                doCorruptReadability = 1;
                break;
            case "Azumi Takahashi, Lotus Juice, ATLUS Sound Team, ATLUS GAME MUSIC, Lotus Juice, ATLUS Sound Team, ATLUS Sound Team - It's Going Down Now":
                doCorruptReadability = 2;
                break;
        }

        if (additional == "direct")
            window.location.href = `https://www.last.fm/music/${lastTrack.artist['#text']}/_/${(lastTrack.name).replace(" ", "+").replace(" ", "+").replace(" ", "+")}`;

        playingSong = `${doCorruptReadability === 1 ? "Lamp" : doCorruptReadability === 2 ? "Azumi Takahashi" : lastTrack.artist['#text']} - ${lastTrack.name}`
        document.getElementById("fmPlaying").textContent = playingSong;

        // Get top 3 genres and add it to the genre tag
        lastfm.artist.getTopTags({artist: `${doCorruptReadability === 1 ? "Lamp" : doCorruptReadability === 2 ? "Azumi Takahashi" : lastTrack.artist['#text']}`, user: "tanosshi"}, {success: function(data){

            // Grab tags
            var topTags = data.toptags.tag.slice(0, 3).map(tag => tag.name).join(', ');

            // Minify NSFW or troll tags created by the Last.fm community
            topTags = topTags.replace(/rape|official shit|garbage|trannycore|pedocore|earrape|nazism|nsbm|lolicore|jermacore|jermastep|urine|gore|vore/g, ""); // Tag cleanify
            topTags = topTags.replace(", ,", ","); // After cleanup

            topTags = topTags.toLowerCase()

            // Set
            document.getElementById("fmGenre").textContent = `${topTags}` || "no genres found, assumably slowcore?";

        }});
        
        // Get user playcount, if broken set question-mark
        lastfm.track.getInfo({artist: `${lastTrack.artist['#text']}`, track: `${lastTrack.name}`, user: "tanosshi"}, {success: function(data){
            var trackInfo = data.track;
            document.getElementById("fmPlays").textContent = `${trackInfo.userplaycount || "?"} plays`;

            var lovedSentences = [
                "∙ ooh! this one is personally loved by tanos",
                "∙ ouh! this one is personally loved by tanos",
                "∙ !! this one is personally loved by tanos",
                "∙ set as loved by tanos",
                "∙ tanos is in love with this one",
                "∙ marked as loved by tanos"
            ];
            var informantSentences = [
                "∙ live updated by last.fm",
                "∙ automatically refreshed !",
                "∙ live information by last.fm",
                "∙ automatically updated !"
            ];

            document.getElementById("fmInformant").style.color = "rgba(255, 255, 255, 0.7);";
            const isLoved = trackInfo.userloved === "1";
            document.getElementById("fmLoved").style.display = isLoved ? "inline-block" : "none";
            document.getElementById("fmInformant").textContent = isLoved ? lovedSentences[Math.floor(Math.random() * lovedSentences.length)] : informantSentences[Math.floor(Math.random() * informantSentences.length)];
            document.getElementById("fmInformant").style.color = isLoved ? "rgb(226, 85, 214, 1)" : "rgba(255, 255, 255, 0.7)";
        }});

      } else { hideFM() }

    }, error: function(code, message){ hideFM(); console.log(code, message) }});
}

function hideFM() {
    document.getElementById("titledFm").style.display = "none";
    document.getElementById("playsngenreFm").style.display = "none";
    document.getElementById("titledFm").style.display = "none";
    document.getElementById("fmGenre").style.display = "none";
    document.getElementById("fmPlaying").style.display = "none";
   }

function rebuildFm() {
    document.getElementById("titledFm").innerHTML = "tanos is currently listening to <a onclick='updateLastFM(\"direct\")' id='fmPlaying'>{updating site please wait}</a> <a id='fmLoved'>💕</a><a id='fmInformant'>∙ {updating site please wait}</a>";
    document.getElementById("playsngenreFm").innerHTML = "has <a id='fmPlays'>{updating site please wait}</a> plays on this song - <a id='fmGenre'>{updating site please wait}</a>";
}

setInterval(updateLastFM, 5000);

window.addEventListener('resize', adjustTextonSizeChange);
adjustTextonSizeChange();
