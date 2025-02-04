var finalDate;
(function($) {
    "use strict";

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    function ssFinalCountdown() {
        var finalDate = new Date("February 6, 2025 00:00:01").getTime();
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

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//////                ============== PRIMARY CODE ==============                //////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// this should load faster than the jquery one!!!! but ensures the script exists
document.addEventListener('DOMContentLoaded', function() {
    log("[!!] Javascript initialized")
    document.getElementById("jsorono").innerHTML = "a random site<br> made for fun lol";
    updateLastFM()
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

function site_settings() {
    $("#home").animate({
        opacity: "0",
    }, 500);

    $("#home").css({
        '-webkit-filter': 'blur(18px)'
    }).animate({}, 1000);

    setTimeout(function() {
        document.getElementById("home").style.display = "none";
    }, 500);

    $("#settings").animate({
        opacity: "1"
    }, 500);

    setTimeout(function() {
        document.getElementById("settings").style.display = "block";
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
    try {
        log("[o] Changing CSS view for viewport " + window.innerWidth); // colored
    } catch {
        console.log("[o] Changing CSS view for viewport " + window.innerWidth); // colorless
    }
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

var c_sh_i = 0;
function siteHealth() {
    log("[L] Running a quick site diagnositcs")
    if (!document.querySelector('.lastfm')) {
        c_sh_i = c_sh_i +1;
        log("[i] Site damage: [" + c_sh_i + "/4]")
        log("[!!] Site is unhealthy, forcing a refresh if equals to 4/4..")
        if (c_sh_i >= 4) {
            window.location.reload();
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//////             ==============LAST FM CODE BELOW ==============             //////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

var fmPrivacyMode = true;
var setModus = "song";
var show_paypal = false;
var isHardPrivacyToggled // future
var last_fm_user = "tanosshi"; // if you want to use on yourself
var tick = 1;

var prev;

function forceLastFM(isForeign) { // required because sometimes gets fucked up by the request data saver
    // <Start>
    prev = "";
    setModus = "song";
    fmPrivacyMode = true;
    playingSong = "...";

    if (!isForeign) {
        updateLastFM()
    } 
    // <Finish>
}

var onRebuildWait = "one moment.."

function rebuildFm(mode) {
    forceLastFM(true)
    log("[<>] forcing a rebuild")
    if (mode == 'switch') {
        if (document.getElementById('fmSwitchable').textContent == 'song')
            setModus = "artist";
        else
            setModus = "song";
    }

    document.getElementById("titledFm").innerHTML = "tanos is currently listening to <a onclick='updateLastFM(\"direct\")' id='fmPlaying'>" + onRebuildWait + "</a> <a id='fmLoved'>💕</a><a id='fmInformant'>∙ " + onRebuildWait + "</a>";
    document.getElementById("playsngenreFm").innerHTML = "has <a id='fmPlays'>" + onRebuildWait + "</a> plays on this <a onclick=\"rebuildFm('switch')\" id=\"fmSwitchable\">" + onRebuildWait + "</a> - <a id='fmGenre'>" + onRebuildWait + "</a>";
    updateLastFM(setModus)
}

function updateLastFM(additional) {
    log("< Start >");
    document.body.style.filter = "invert(0)"; // Make sure any dark reader extension doesnt mess this up
    var cache = new LastFMCache(); // Request Cache

    log("[i] Creating a LastFM session")
    var lastfm = new LastFM({
      apiKey    : '219c75f1150728c565372e20d648430e',
      cache     : cache
    });
    log("[i] LastFM session created, err:0")

    var playingSong = "...";

    if (last_fm_user != "tanosshi" && setModus == "privacy" && isHardPrivacyToggled != true) {
        log("[!!] Error, changes found in variables, recreating self")
        forceLastFM(false);
        rebuildFm();
        updateLastFM();
    }

    log("< Load the current playing music, or the last played music >")
    log("[REQ] Loading user.getRecentTracks => Artist Information, Music Title")
    lastfm.user.getRecentTracks({user: last_fm_user}, {success: function(data){ // change this to tanosshi to compare playcount
      log("[?] Loads")
      try {
        var attemptAtConnection = data.recenttracks.track[0]["@attr"].nowplaying // i shall not overload the fm servers
      } catch {
        var attemptAtConnection = undefined;
      }

      log("< Setting privacy >")
      if (fmPrivacyMode && attemptAtConnection != undefined) {
        if (["wockstxrr", "unknown", "Testimony", "PW1", "Unknown", "wockstarr", "Big Man Gaming", "slitue", "Tonil", "null", "1uke", "fred", "KyaGaKill", "DIXMONDZ", "lain", "ansu", "your audio plug.", "matias", "thriiiedd", "jaleelsthinking", "mentallyscared", "Tonilk_2", "Tonilk", "ciaffa", "Devil's Work", "l.o.f.e", "alexedits", "Mashstache", "KILLxKILL", "Tonilk_", "Jean", "rayy", "666ep", "finesse", "Zeroh", "dex535", "User 45410008", "zeroh", "TrenHub", "daexnight", "#Real", "some random name", "kxrrvpt", "tiktokaudioguy", "wockstarr", "crazycookiemaniac", "User ", "maxnotwell327", "tea", "kingpin. (real)", "real", "kxrr", ""].includes(data.recenttracks.track[0].artist['#text'])) {
            attemptAtConnection = undefined;
            log("[FM]: Privacy Mode toggled");
        }
      }
      
      log("< Is privacy right? >")
      attemptAtConnection = !document.querySelector('.lastfm') ? undefined : attemptAtConnection;

      var d = new Date();
      var n = d.getTimezoneOffset();
      var timezone = n / -60;

      log("< Is rest needed ? >")
      if (timezone < 6 && last_fm_user == "tanosshi" || isHardPrivacyToggled) {
        log("[>] Needs privacy?")

        var hr = new Date().getHours()
        log("[i] Current hour(s) is " + hr);
        if ((hr >= 1 && hr <= 6) || isHardPrivacyToggled) {
            attemptAtConnection = undefined;
            setModus = "privacy";
        }
        else {
            if (attemptAtConnection == undefined && isHardPrivacyToggled == false)
                forceLastFM(false);
        }
      }

      log("< Setting privacy rule >")
      if(attemptAtConnection == undefined || attemptAtConnection == null) {
        try {
            if (setModus == "privacy") {
                document.getElementById("titledFm").innerHTML = `tanos has forced privacy mode <a id='fmPlaying'></a><a id='fmLoved'>💤</a><a id="fmInformant"> ∙  according to the clock</a>`
                var sadSentences = [
                    "automatically enables at night",
                    "mind your own business now",
                    "see ya another time",
                    "mmh sleepy sleepy",
                    "sleep well",
                    "good night",
                    "sleeeeppyyy",
                    "ahaaaaaaaaaaaa",
                    "meow meow",
                    "meeoooooow"
                ];
                document.getElementById("playsngenreFm").innerHTML = `${sadSentences[Math.floor(Math.random() * sadSentences.length)]}<a id="fmPlays"></a><a onclick="rebuildFm('switch')" id="fmSwitchable"></a>, will automatically rebuild after activity found</a><a id="fmGenre"></a>`    
                document.getElementById("fmLoved").style.display = "inline-block";
            } else {
                document.getElementById("titledFm").innerHTML = `tanos is currently not listening to anything <a id="fmInformant">∙ according to last.fm</a>`
                var sadSentences = [
                    "how unfortunate !",
                    "or last.fm could be down ?",
                    "you'll live dont worry",
                    "thats crazy",
                    "unfortunate",
                    "lol maybe another time",
                    "err time to mind your own business",
                    `¯\\_(ツ)_/¯`,
                    "🤷",
                    ":(",
                    "wooof wooof"
                ];
                document.getElementById("playsngenreFm").innerHTML = `${sadSentences[Math.floor(Math.random() * sadSentences.length)]}<a id="fmPlays">, will automatically rebuild after activity found</a><a id="fmGenre"></a>`    
            }
        }
        catch {
            log("[x] Ignore")
        }
      }
      else if(data.recenttracks.track.length > 0) {
        log("< Cleaning source page >")
        if (document.getElementById("titledFm").innerHTML == `tanos is currently not listening to anything <a id="fmInformant">∙ according to last.fm</a>` || document.getElementById("titledFm").innerHTML.includes("has forced privacy mode"))
            rebuildFm()
        
        var lastTrack = data.recenttracks.track[0];

        log("< Checking if source of call is unknown >")

        if (additional == "direct")
            window.location.href = `https://www.last.fm/music/${lastTrack.artist['#text']}/_/${(lastTrack.name).replace(" ", "+").replace(" ", "+").replace(" ", "+")}`; // 3 different unicodes i believe

        log("< Initializing main code >")
        playingSong = `${lastTrack.artist['#text'].includes('luxTypes') ? "luxTypes" : lastTrack.artist['#text']} - ${lastTrack.name}`
        
        log("< title.lang = english ? foreign >")
        if (/[^a-zA-Z0-9\s\-\[\]&é,.()'$*!+\/%"]/.test(playingSong))
            document.getElementById("fmPlaying").style.fontFamily = "altlang";
        else
            document.getElementById("fmPlaying").style.fontFamily = "nfont";
        
        document.getElementById("fmPlaying").textContent = playingSong;

        log("< Grabbing tags >")
        if(prev != playingSong + " => " + setModus) {
            log("[REQ] Loading artist.getTopTags => Artist genres")
            var thefinalartist
            
            if (!lastTrack.artist['#text'].toLowerCase() != "tyler, the creator")
                thefinalartist = `${lastTrack.artist['#text'].split(',')[0]}`
            else
                thefinalartist = lastTrack.artist['#text'];

            log("[i] Artist set to check for tags == " + thefinalartist);
            lastfm.artist.getTopTags({artist: thefinalartist, user: last_fm_user}, {success: function(data){
                log("< Loading tags >")
                var topTags = data.toptags.tag.slice(0, 3).map(tag => tag.name).join(', ');

                log("< Minifying NSFW tags if found >")
                topTags = topTags.replace(/rape|official shit|garbage|trannycore|pedocore|earrape|nazism|nsbm|lolicore|jermacore|jermastep|urine|gore|vore|ukraine/g, ""); // Tag cleanify
                topTags = topTags.replace(", ,", ","); // After cleanup
                topTags = topTags.replace("seen live", "live artist"); // Misunderstanding of tags

                topTags = topTags.toLowerCase()
                var additional_topTags = "";

                log("< Setting tag >")

                switch (thefinalartist) {
                    case 'luxTypes':
                    case 'FE2 Community Maps OST':
                    case 'LemmyLada': 
                    case 'DominoContributing':
                    case 'GamesAreJust4fun':
                    case 'Manel Navola':
                    case 'ImJohny':
                    case 'Crazyblox':
                    case 'Valorant':
                        topTags = 'video game music';
                        break;
                    case "Arianne":
                    case "Dark Soul":
                    case "Yoko Takahashi":
                    case "Shiro SAGISU":
                    case "Megumi Hayashibara":
                    case "林原めぐみ":
                    case "datfootdive":
                    case "鷺巣詩郎":
                        additional_topTags = '<a id="evangelionref">evangelion!!!!!!!</a>';
                        break;
                    default:
                        if (topTags.length < 2) {
                            topTags = "no genres found, assumably slowcore?";
                        }
                        break;
                }
                
                log("[SET] " + topTags);
                
                document.getElementById("fmGenre").innerHTML = `${topTags}${additional_topTags.length > 1 ? ', ' + additional_topTags : ''}`;
                
            }});
        }
        else {
            log("[REQ BLOCKED:1] Previous song is too familiar to the current.")
        }
        
        var cached_playcount = `...`

        log("< Proceeding to the middle of the code >")
        log("< Grabbing playcount >")
        if(prev != playingSong + " => " + setModus) {
            log("[REQ] Loading track.getInfo => Song playcount, favorite")
            lastfm.track.getInfo({artist: `${lastTrack.artist['#text']}`, track: `${lastTrack.name}`, user: last_fm_user}, {success: function(data){
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
                    "∙ marked as favorite by tanos",
                    "∙ tanos found this song pretty good",
                    "∙ tanos is in love with this one",
                    "∙ YEAAH THIS ONE IS GOOD, love from tanos!!",
                    "∙ marked as loved by tanos"
                ];
                var informantSentences = [
                    "∙ live updated by last.fm",
                    "∙ automatically refreshed !",
                    "∙ live information by last.fm",
                    "∙ automatically updated !",
                    "∙ live data by last.fm",
                    "∙ automatically changing !",
                    "∙ updates automatically",
                    "∙ live data",
                    "∙ up to date information"
                ];
    
                document.getElementById("fmInformant").style.color = "rgba(255, 255, 255, 0.7);";
                const isLoved = trackInfo.userloved === "1";
                document.getElementById("fmLoved").style.display = isLoved ? "inline-block" : "none";
                document.getElementById("fmInformant").textContent = isLoved ? lovedSentences[Math.floor(Math.random() * lovedSentences.length)] : informantSentences[Math.floor(Math.random() * informantSentences.length)];
                document.getElementById("fmInformant").style.color = isLoved ? "rgb(226, 85, 214, 1)" : "rgba(255, 255, 255, 0.7)";
    
                if (setModus == "artist" || additional == "artist") {
                    var arts = `${lastTrack.artist['#text']}`
                    log("[REQ] Loading user.getTopArtists => Get artist playcount")
                    lastfm.user.getTopArtists({user: last_fm_user}, {success: function(data){
                        const artistData = data.topartists.artist.find(artist => artist.name === arts);
                        if (artistData) {
                            const playcount = artistData.playcount; // Get the playcount
                            document.getElementById("fmPlays").textContent = `${playcount || "?"} plays`;
                            log(playcount);
                            show_paypal = true;
                        } else {
                            document.getElementById("fmPlays").textContent = `${cached_playcount || "?"} plays`;
                            document.getElementById("doonat").innerHTML = `<a id="fmfoot_err">!! artist playcount not available for this artist</a>`;
                            show_paypal = false;
                            log(`Artist ${arts} not found in top artists.`);
                        }
                    }});
                }
    
                if (show_paypal)
                    document.getElementById("doonat").innerHTML = `donations accepted via <a href="https://www.paypal.com/paypalme/tanospaypal" style="cursor:pointer;" onclick="window.location = 'https://www.paypal.com/paypalme/tanospaypal'">paypal</a>`;
            }});
        }
        else {
            log("[REQ BLOCKED:2+3] Previous song is too familiar to the current.")
        }

        log("< Final Checkup >")
        log("[i]" + " これを読む価値はあるでしょうか？ : {} " + cached_playcount);
        if (document.getElementById("fmPlays").innerHTML == "...") // would be too late here for a check, unless you want the site to look slow
            document.getElementById("fmPlays").innerHTML = cached_playcount === undefined ? "?" : cached_playcount;

        log("< Finishing up >")
        tick = tick+1;
        document.getElementById('fmSwitchable').textContent = setModus
        const fmTextElement = document.getElementById('fmPlaying');

        log("[i] Characters in total playing is " + fmTextElement.textContent.length)
        if (playingSong.toLowerCase().indexOf("i really want to stay") === -1 && playingSong.toLowerCase().indexOf("mass of the fermenting dregs") === -1 && fmTextElement.textContent.length > 85)
            fmTextElement.textContent = fmTextElement.textContent.substring(0, 50) + '...';

        document.getElementById("titledFm").innerHTML = last_fm_user !== "tanosshi" ? document.getElementById("titledFm").innerHTML.replace("tanos", last_fm_user) : document.getElementById("titledFm").innerHTML;
                
        prev = playingSong + " => " + setModus;
        log("[i] " + prev + " <> Tick:" + tick)
      } else { hideFM() }

    }, error: function(code, message){ hideFM(); log("[!!] " + code, message) }});
}

function hideFM() {
    ["titledFm", "playsngenreFm", "fmGenre", "fmPlaying"].forEach(id => document.getElementById(id).style.display = "none");
}

function updateClock() {
    log("[ADD] Reading if clock is nilled..");
    if($('.time.days').html() == "00 <span>day</span>" && $('.time.hours').html() == "00 <span>H</span>" && $('.time.minutes').html() == "00 <span>M</span>" && $('.time.seconds').html() == "00 <span>S</span>") {
        cook()
    }
}

setInterval(updateLastFM, 4543 + tick);
setInterval(forceLastFM, 11326);
setInterval(updateClock, 1000);
setInterval(siteHealth, 1000);

window.addEventListener('resize', adjustTextonSizeChange);
adjustTextonSizeChange();
