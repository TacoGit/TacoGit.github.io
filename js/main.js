var finalDate;
(function($) {
    "use strict";

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    function ssFinalCountdown() {
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
    }

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

    if (currentTime >= 19 || currentTime <= 6)
        greetingElement.textContent = "make sure to have a good night";
    else 
        greetingElement.textContent = "make sure to make the most of your day";
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
        var elementsToHide = ["siteby", "doonat", "sitecon"];
        elementsToHide.forEach(function(elementId) {
            document.getElementById(elementId).style.display = "none";
        });
        document.getElementById("canbechangedbywindowpreferences").innerText = "bottom";
        document.getElementById("underlinetextredirectionsforthemodernpage").style.fontStyle = "normal"; // its for readablity on smaller devices
        document.getElementById("underlinetextredirectionsforthemodernpage").style.marginTop = "0px";
    } else {
        ["canbechangedbywindowpreferences", "siteby", "doonat", "sitecon"].forEach(id => {
            document.getElementById(id).style.display = "inline-block";
        });
        document.getElementById("canbechangedbywindowpreferences").innerText = "right";
        document.getElementById("underlinetextredirectionsforthemodernpage").style.fontStyle = "italic";
        document.getElementById("underlinetextredirectionsforthemodernpage").style.marginTop = "-23px";
    }
}

var fmPrivacyMode = true;
var setModus = "song";
var show_paypal = false;

function updateLastFM(additional) {
    document.body.style.filter = "invert(0)"; // Make sure any dark reader extension doesnt mess this up
    var cache = new LastFMCache(); // Request Cache

    var lastfm = new LastFM({
      apiKey    : '219c75f1150728c565372e20d648430e',
      cache     : cache
    });

    var playingSong = "...";

    // Load the current playing music, or the last played music
    console.log("Loading user.getRecentTracks => Artist Information, Music Title")
    lastfm.user.getRecentTracks({user: 'tanosshi'}, {success: function(data){
      try {
        var attemptAtConnection = data.recenttracks.track[0]["@attr"].nowplaying // i shall not overload the fm servers
      } catch {
        var attemptAtConnection = undefined;
      }

      if (fmPrivacyMode && attemptAtConnection != undefined) {
        if (["wockstxrr", "unknown", "Testimony", "PW1", "Unknown", "wockstarr", "Big Man Gaming", "slitue", "Tonil", "null", "1uke", "fred", "KyaGaKill", "DIXMONDZ", "lain", "ansu", "your audio plug.", "matias", "thriiiedd", "jaleelsthinking", "mentallyscared", "Tonilk_2", "Tonilk", "ciaffa", "Devil's Work", "l.o.f.e", "alexedits", "Mashstache", "KILLxKILL", "Tonilk_", "Jean", "rayy", "666ep", "finesse", "Zeroh", "dex535", "User 45410008", "zeroh", "TrenHub", "daexnight"].includes(data.recenttracks.track[0].artist['#text'])) {
            attemptAtConnection = undefined;
            console.log("[FM]: Privacy Mode toggled");
        }
      }

      if(attemptAtConnection == undefined || attemptAtConnection == null) {
        document.getElementById("titledFm").innerHTML = `tanos is currently not listening to anything <a id="fmInformant">∙ according to last.fm</a>`
        var sadSentences = [
            "how unfortunate !",
            "or last.fm could be down ?",
            "you'll live dont worry",
            "thats crazy",
            ":("
        ];
        document.getElementById("playsngenreFm").innerHTML = `${sadSentences[Math.floor(Math.random() * sadSentences.length)]}<a id="fmPlays">, will automatically rebuild after activity found</a><a id="fmGenre"></a>`
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
            case "Azumi Takahashi, Lotus Juice, ATLUS Sound Team, ATLUS GAME MUSIC, Lotus Juice, ATLUS Sound Team, ATLUS Sound Team":
                doCorruptReadability = 2;
                break;
            case lastTrack.artist['#text'].toLowerCase().includes("lamp"):
                doCorruptReadability = 1;
                break;
        }

        if (additional == "direct")
            window.location.href = `https://www.last.fm/music/${lastTrack.artist['#text']}/_/${(lastTrack.name).replace(" ", "+").replace(" ", "+").replace(" ", "+")}`; // 3 different unicodes i believe

        playingSong = `${doCorruptReadability === 1 ? "Lamp" : doCorruptReadability === 2 ? "Azumi Takahashi" : lastTrack.artist['#text']} - ${lastTrack.name}`
        document.getElementById("fmPlaying").textContent = playingSong;

        // Get top 3 genres and add it to the genre tag
        console.log("Loading artist.getTopTags => Artist genres")
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
        
        var cached_playcount = `...`
        // Get playcount, if broken set question-mark
        console.log("Loading track.getInfo => Song playcount, favorite")
        lastfm.track.getInfo({artist: `${lastTrack.artist['#text']}`, track: `${lastTrack.name}`, user: "tanosshi"}, {success: function(data){
            var trackInfo = data.track;
            cached_playcount = `${trackInfo.userplaycount}`
            if (setModus == "song") {
                document.getElementById("doonat").innerHTML = `donations accepted via <a href="https://www.paypal.com/paypalme/tanospaypal" style="cursor:pointer;" onclick="window.location = 'https://www.paypal.com/paypalme/tanospaypal'">paypal</a>`;
                document.getElementById("fmPlays").textContent = `${trackInfo.userplaycount || "?"} plays`;
            }

            var lovedSentences = [
                "∙ ooh! this one is personally loved by tanos",
                "∙ ouh! this one is personally loved by tanos",
                "∙ !! this one is personally loved by tanos",
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

            if (setModus == "artist" || additional == "artist") {
                var arts = `${lastTrack.artist['#text']}`
                console.log("Loading user.getTopArtists => Get artist playcount")
                lastfm.user.getTopArtists({user: "tanosshi"}, {success: function(data){
                    const artistData = data.topartists.artist.find(artist => artist.name === arts);
                    if (artistData) {
                        const playcount = artistData.playcount; // Get the playcount
                        document.getElementById("fmPlays").textContent = `${playcount || "?"} plays`;
                        show_paypal = true;
                    } else {
                        document.getElementById("fmPlays").textContent = `${cached_playcount || "?"} plays`;
                        document.getElementById("doonat").innerHTML = `<a id="fmfoot_err">!! artist playcount not available for this artist</a>`;
                        show_paypal = false;
                        console.log(`Artist ${arts} not found in top artists.`);
                    }
                }});
            }

            if (show_paypal)
                document.getElementById("doonat").innerHTML = `donations accepted via <a href="https://www.paypal.com/paypalme/tanospaypal" style="cursor:pointer;" onclick="window.location = 'https://www.paypal.com/paypalme/tanospaypal'">paypal</a>`;
        }});

        document.getElementById('fmSwitchable').textContent = setModus
        const fmTextElement = document.getElementById('fmPlaying');
        if (fmTextElement.textContent.length > 50)
            fmTextElement.textContent = fmTextElement.textContent.substring(0, 50) + '...';

      } else { hideFM() }

    }, error: function(code, message){ hideFM(); console.log(code, message) }});
}

function hideFM() {
    ["titledFm", "playsngenreFm", "fmGenre", "fmPlaying"].forEach(id => document.getElementById(id).style.display = "none");
}

function rebuildFm(mode) {
    console.log("forcing a rebuild")
    if (mode == 'switch') {
        if (document.getElementById('fmSwitchable').textContent == 'song')
            setModus = "artist";
        else
            setModus = "song";
    }

    document.getElementById("titledFm").innerHTML = "tanos is currently listening to <a onclick='updateLastFM(\"direct\")' id='fmPlaying'>one moment..</a> <a id='fmLoved'>💕</a><a id='fmInformant'>∙ one moment..</a>";
    document.getElementById("playsngenreFm").innerHTML = "has <a id='fmPlays'>one moment..</a> plays on this <a onclick=\"rebuildFm('switch')\" id=\"fmSwitchable\">one moment..</a> - <a id='fmGenre'>one moment..</a>";
    updateLastFM(setModus)
}

function updateClock() {
    if($('.time.days').html() == "00 <span>day</span>" && $('.time.hours').html() == "00 <span>H</span>" && $('.time.seconds').html() == "00 <span>S</span>") {
        document.getElementById("updateableEpicness").innerText = "i wasted your time lol";
        document.getElementById("updateableEpicness").style.textTransform = "lowercase";
    }
}

setInterval(updateLastFM, 4852);
setInterval(updateClock, 30000);

window.addEventListener('resize', adjustTextonSizeChange);
adjustTextonSizeChange();
