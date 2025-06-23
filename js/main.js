var finalDate;
(function ($) {
  "use strict";

  var doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  function ssFinalCountdown() {
    var finalDate = new Date("February 6, 2026 00:00:01").getTime();
    $(".home-content__clock")
      .countdown(finalDate)
      .on("update.countdown finish.countdown", function (event) {
        var str =
          '<div class="top"><div class="time days">' +
          "%D <span>day%!D</span>" +
          "</div></div>" +
          '<div class="time hours">' +
          "%H <span>H</span></div>" +
          '<div class="time minutes">' +
          "%M <span>M</span></div>" +
          '<div class="time seconds">' +
          "%S <span>S</span></div>";

        $(this).html(event.strftime(str));
      });
  }

  (function ssInit() {
    ssFinalCountdown();
  })();
})(jQuery);

/////////////////////////////////////////////////////////////////////////////////////
//////                ============== PRIMARY CODE ==============                /////
/////////////////////////////////////////////////////////////////////////////////////

// this should load faster than the jquery one!!!! but ensures the script exists
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("jsorono").innerHTML =
    "a random site<br> made for fun lol";
  updateLastFM();
  home();
});

const $home = $("#home");
const $txtprj = $("#txtprj");
const $projects = $("#projects");
const $overlay = $("#overlay");

function loadProjects(projectData) {
  const container = document.getElementById("pp");
  container.innerHTML = "";

  projectData.forEach((section) => {
    const h3 = document.createElement("h3");
    h3.textContent = section.category;
    h3.id = "projectid";

    if (section.category === "QUALITY") {
      h3.style.marginTop = "3.5rem";
    }

    container.appendChild(h3);

    section.projects.forEach((project) => {
      const btn = document.createElement("button");
      btn.textContent = project.name;

      if (project.class) {
        btn.classList.add(project.class);
      }

      btn.onclick = () => {
        window.location = project.url;
      };

      container.appendChild(btn);
    });

    container.appendChild(document.createElement("br"));
  });
}

function fetchProjectswithFailDetection(url1, url2) {
  fetch(url1)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load " + url1);
      return res.json();
    })
    .then((data) => {
      if (!data || data.length === 0) throw new Error("No data in " + url1);
      loadProjects(data);
    })
    .catch(() => {
      fetch(url2)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load " + url2);
          return res.json();
        })
        .then((data) => {
          if (!data || data.length === 0) throw new Error("No data in " + url2);
          loadProjects(data);
        })
        .catch((err) => {
          console.error("Failed to load both files:", err);
        });
    });
}

function projects() {
  $home.addClass("transition-element");
  $txtprj.addClass("transition-element");
  $projects.addClass("transition-element");

  if (document.getElementById("pp") != ("" || " "))
    fetchProjectswithFailDetection(
      "projects.json",
      "https://tanos.is-a.dev/projects.json"
    );

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
    const spanText = item.querySelector("span")?.textContent;
    if (spanText === "Projects") {
      item.classList.add("active");
    }
  });

  $home.css({
    opacity: "0",
    filter: "blur(18px)",
    transform: "scale(0.95)",
  });

  $txtprj.css({
    opacity: "0",
    transform: "translateY(-20px)",
  });

  requestAnimationFrame(() => {
    setTimeout(() => {
      $home.hide();
      $txtprj.hide();

      $projects.css({
        display: "block",
        opacity: "0",
        transform: "translateY(20px)",
      });

      $projects[0].offsetHeight;

      requestAnimationFrame(() => {
        $projects.css({
          opacity: "1",
          transform: "translateY(0)",
        });
      });
    }, 300);
  });
}

function home() {
  $home.addClass("transition-element");
  $txtprj.addClass("transition-element");
  $projects.addClass("transition-element");

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
    const spanText = item.querySelector("span")?.textContent;
    if (spanText === "Home") {
      item.classList.add("active");
    }
  });

  $projects.css({
    opacity: "0",
    transform: "translateY(20px)",
  });

  requestAnimationFrame(() => {
    document.getElementById("pp").innerHTML = "";
    setTimeout(() => {
      $projects.hide();

      $home.css({
        display: "",
        opacity: "0",
        filter: "blur(18px)",
        transform: "scale(0.95)",
      });

      $home[0].offsetHeight;

      requestAnimationFrame(() => {
        $home.css({
          opacity: "1",
          filter: "blur(0)",
          transform: "scale(1)",
        });
      });
    }, 300);
  });
}

function site_settings() {
  $("#home").animate(
    {
      opacity: "0",
    },
    500
  );
  $("#txtprj").animate(
    {
      opacity: "0",
    },
    500
  );

  $("#home")
    .css({
      "-webkit-filter": "blur(18px)",
    })
    .animate({}, 1000);

  setTimeout(function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("txtprj").style.display = "none";
  }, 500);

  $("#settings").animate(
    {
      opacity: "1",
    },
    500
  );

  setTimeout(function () {
    document.getElementById("settings").style.display = "block";
  }, 500);
}

function s_a_p() {
  var buttons = document.querySelectorAll(".nonquality");

  buttons.forEach(function (button) {
    button.style.display = "inline-block";
  });
}

function s_q_p() {
  var buttons = document.querySelectorAll(".nonquality");

  buttons.forEach(function (button) {
    button.style.display = "none";
  });
}

function adjustTextonSizeChange() {
  const w = window.innerWidth,
    txt = document.getElementById("canbechangedbywindowpreferences"),
    redir = document.getElementById(
      "underlinetextredirectionsforthemodernpage"
    ),
    hide = ["siteby", "doonat", "sitecon"];

  if (w <= 510) txt.innerText = "bottom";
  if (w <= 800) {
    hide.forEach((id) => (document.getElementById(id).style.display = "none"));
    redir.style.fontStyle = "normal";
    redir.style.marginTop = "0px";
  } else {
    ["canbechangedbywindowpreferences", ...hide].forEach(
      (id) => (document.getElementById(id).style.display = "inline-block")
    );
    txt.innerText = "top";
    redir.style.fontStyle = "italic";
    redir.style.marginTop = "-23px";
  }
}

var c_sh_i = 0;
function siteHealth() {
  document.querySelectorAll('[class*="pace"]').forEach((el) => {
    el.classList.forEach((cls) => {
      if (cls.includes("pace")) el.classList.remove(cls);
    });
  });

  if (!document.querySelector(".lastfm") || (!document.querySelectorAll("#shomes"))) {
    c_sh_i = c_sh_i + 1;
    if (c_sh_i >= 4) {
      window.location.reload();
    }
  }
}

var are_proper_projects_rendered = false;

function generateProjectsASCII(projectsData) {
  let output = "";

  output += "    • ┈┈┈ • ┈┈┈ • ┈┈┈ • ┈┈┈ • ┈┈┈ projects ᓚᘏᗢ\\n\n";
  output += "    ┊     ?     ┊     ┊     ★ Quality\\n";

  const qualityProjects =
    projectsData.find((cat) => cat.category === "QUALITY")?.projects || [];
  qualityProjects.forEach((project) => {
    const symbol = Math.random() > 0.5 ? "°" : "₊";
    output += `    ┊           ┊     ┊     ${symbol} . <a onclick="window.location='${project.url}'">${project.name}</a>\\n`;
  });

  output += "    ┊           ┊     ┊\\n";

  output += "    ┊           ┊     ✫ Decompilations or android ports\\n";
  const decompsProjects =
    projectsData.find((cat) => cat.category === "DECOMPILATIONS OR PORTS")
      ?.projects || [];
  decompsProjects.forEach((project, index) => {
    const symbol = index === 0 ? "⊹ ｡" : "︶  ۫";
    output += `    ┊           ┊     ${symbol} <a onclick="window.location='${project.url}'">${project.name}</a>\\n`;
  });

  output += "    ┊           ┊\\n";

  output += "    ┊           𐐪 Basics\\n";
  const basicsProjects =
    projectsData.find((cat) => cat.category === "BASICS")?.projects || [];
  basicsProjects.forEach((project, index) => {
    const symbols = ["﹒〣", "↷ ⋯", "¨ 🎞", "¨ ⑅", "◦ ★"];
    const symbol = symbols[index % symbols.length];

    let projectName = project.name;
    if (project.name.toLowerCase().includes("nanobot")) {
      projectName = `${project.name} <strong>base</strong> for the discord bot`;
    }

    output += `    ┊          ${symbol}  <a onclick="window.location='${project.url}'">${projectName}</a>\\n`;
  });

  const partialProjects =
    projectsData.find((cat) => cat.category === "ONLY PARTIALLY MINE")
      ?.projects || [];
  partialProjects.forEach((project) => {
    output += `    ┊          ﹒〣  <a onclick="window.location='${project.url}'">${project.name}</a>\\n`;
  });

  output += "    ┊\\n";

  output += "    糸 Broken, useless or unfinished projects\\n";
  const brokenProjects =
    projectsData.find((cat) => cat.category === "BROKEN, DROPPED OR USELESS")
      ?.projects || [];

  brokenProjects.forEach((project) => {
    let status = "Useless";
    if (
      project.name.toLowerCase().includes("bob the ai") ||
      project.name.toLowerCase().includes("discord bot builder")
    ) {
      status = "Broken";
    } else if (
      project.name.toLowerCase().includes("giveaway") ||
      project.name.toLowerCase().includes("typetester")
    ) {
      status = "Unfinished";
    }

    output += `    ˎˊ- ${status} - <a onclick="window.location='${project.url}'">${project.name}</a>\\n`;
  });

  output += "\\n    ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖  ᓚ₍ ^. .^₎  ▬▬ι═══════ﺤ \\n";

  return output;
}

function proper_projects() {
  document.getElementById("txtprj").style.display = "block";

  fetch("projects.json")
    .then((res) => {
      if (!res.ok) throw new Error("failed to load projects.json");
      return res.json();
    })
    .then((data) => {
      var ascii = generateProjectsASCII(data);
      ascii = ascii.replace(
        "Nanobot $XNO crypto wallet <strong>base</strong> for the discord bot</a>",
        "Nanobot $XNO crypto wallet <strong>base</strong> bot</a>"
      );
      ascii = ascii.replace("successful ", "");
      ascii = ascii.replace("Kuudere Simulator ", "Kuudere Sim ");
      document.getElementById("prjs").innerHTML = ascii.replace(
        /[^\n]/g,
        (match, index) => {
          return index % 3 === 0 ? "{" : index % 3 === 1 ? "}" : "i";
        }
      );
    })
    .catch((err) => {
      console.error("error loading project data:", err);
    });

  $("#home").animate(
    {
      opacity: "0",
    },
    500
  );
  $("#projects").animate(
    {
      opacity: "0",
    },
    500
  );
  $("#txtprj").animate(
    {
      opacity: "1",
    },
    500
  );
  new TextScrambler(
    "#prjs",
    {
      updateInterval: 0.02,
      restoreDelay: 1,
      restoreInterval: 1,
      bulkSize: 30,
    },
    () => {
      are_proper_projects_rendered = true;
      //document.getElementById("prjs").innerHTML = window.screen.width <= 435 ? project_simplified : projectslii;
    }
  );
  setTimeout(function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
  }, 500);
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//////             ==============LAST FM CODE BELOW ==============             //////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

var fmPrivacyMode = true;
var setModus = "song";
var show_paypal = false;
var isHardPrivacyToggled; // future
var last_fm_user = "tanosshi"; // if you want to use on yourself
var tick = 1;

var prev;

function forceLastFM(isForeign) {
  // required because sometimes gets fucked up by the request data saver
  // <Start>
  prev = "";
  setModus = "song";
  fmPrivacyMode = true;
  playingSong = "...";

  if (!isForeign) {
    updateLastFM();
  }
  // <Finish>
}

var onRebuildWait = "one moment..";

function rebuildFm(mode) {
  forceLastFM(true);
  if (mode == "switch") {
    if (document.getElementById("fmSwitchable").textContent == "song")
      setModus = "artist";
    else setModus = "song";
  }

  document.getElementById("titledFm").innerHTML =
    "tanos is currently listening to <a onclick='updateLastFM(\"direct\")' id='fmPlaying'>" +
    onRebuildWait +
    "</a> <a id='fmLoved'>💕</a><a id='fmInformant'>∙ " +
    onRebuildWait +
    "</a>";
  document.getElementById("playsngenreFm").innerHTML =
    "has <a id='fmPlays'>" +
    onRebuildWait +
    '</a> plays on this <a onclick="rebuildFm(\'switch\')" id="fmSwitchable">' +
    onRebuildWait +
    "</a> - <a id='fmGenre'>" +
    onRebuildWait +
    "</a>";
  updateLastFM(setModus);
}

function updateLastFM(additional) {
  document.body.style.filter = "invert(0)";

  var cache = new LastFMCache(); // Request Cache

  var lastfm = new LastFM({
    apiKey: "219c75f1150728c565372e20d648430e",
    cache: cache,
  });

  var playingSong = "...";

  if (
    last_fm_user != "tanosshi" &&
    setModus == "privacy" &&
    isHardPrivacyToggled != true
  ) {
    forceLastFM(false);
    rebuildFm();
    updateLastFM();
  }

  lastfm.user.getRecentTracks(
    { user: last_fm_user },
    {
      success: function (data) {
        try {
          var attemptAtConnection =
            data.recenttracks.track[0]["@attr"].nowplaying; // i shall not overload the fm servers
        } catch {
          var attemptAtConnection = undefined;
        }

        if (fmPrivacyMode && attemptAtConnection != undefined) {
          if (
            [
              "wockstxrr",
              "unknown",
              "Testimony",
              "PW1",
              "Unknown",
              "wockstarr",
              "Big Man Gaming",
              "slitue",
              "Tonil",
              "null",
              "1uke",
              "fred",
              "KyaGaKill",
              "DIXMONDZ",
              "lain",
              "ansu",
              "your audio plug.",
              "matias",
              "thriiiedd",
              "jaleelsthinking",
              "mentallyscared",
              "Tonilk_2",
              "Tonilk",
              "ciaffa",
              "Devil's Work",
              "l.o.f.e",
              "alexedits",
              "Mashstache",
              "KILLxKILL",
              "Tonilk_",
              "Jean",
              "rayy",
              "666ep",
              "finesse",
              "Zeroh",
              "dex535",
              "User 45410008",
              "zeroh",
              "TrenHub",
              "daexnight",
              "#Real",
              "some random name",
              "kxrrvpt",
              "tiktokaudioguy",
              "wockstarr",
              "crazycookiemaniac",
              "User ",
              "maxnotwell327",
              "tea",
              "kingpin. (real)",
              "real",
              "kxrr",
              "",
            ].includes(data.recenttracks.track[0].artist["#text"])
          ) {
            attemptAtConnection = undefined;
          }
        }

        attemptAtConnection = !document.querySelector(".lastfm")
          ? undefined
          : attemptAtConnection;

        if (last_fm_user == "tanosshi" || isHardPrivacyToggled) {
          var hr = new Date().getHours();
          if ((hr >= 1 && hr <= 6) || isHardPrivacyToggled) {
            attemptAtConnection = undefined;
            setModus = "privacy";
          } else {
            if (
              attemptAtConnection == undefined &&
              isHardPrivacyToggled == false
            )
              forceLastFM(false);
          }
        }

        if (attemptAtConnection == undefined || attemptAtConnection == null) {
          try {
            if (setModus == "privacy") {
              document.getElementById(
                "titledFm"
              ).innerHTML = `tanos has forced privacy mode <a id='fmPlaying'></a><a id='fmLoved'>💤</a><a id="fmInformant"> ∙  according to the clock</a>`;
              var sadSentences = [
                "automatically enables at night",
                "mind your own business now",
                "see ya another time",
                "mmh sleepy sleepy",
                "have a fine night tonight",
                "fine night tonight",
                "sleep well",
                "good night",
                "and you dont seem to understand",
                "sleeeeppyyy",
                "ahaaaaaaaaaaaa",
                "meow meow",
                "meeoooooow",
              ];
              document.getElementById("playsngenreFm").innerHTML = `${
                sadSentences[Math.floor(Math.random() * sadSentences.length)]
              }<a id="fmPlays"></a><a onclick="rebuildFm('switch')" id="fmSwitchable"></a>, will automatically rebuild after activity found</a><a id="fmGenre"></a>`;
              document.getElementById("fmLoved").style.display = "inline-block";
            } else {
              document.getElementById(
                "titledFm"
              ).innerHTML = `tanos is currently not listening to anything <a id="fmInformant">∙ according to last.fm</a>`;
              var sadSentences = [
                "how unfortunate !",
                "or last.fm could be down ?",
                "you'll live dont worry",
                "thats crazy",
                "thats sad",
                "unfortunate",
                "unfortunate",
                "as if you'd care lol",
                "lol maybe another time",
                "err time to mind your own business",
                `¯\\_(ツ)_/¯`,
                "🤷",
                ":(",
                "wooof wooof",
              ];
              document.getElementById("playsngenreFm").innerHTML = `${
                sadSentences[Math.floor(Math.random() * sadSentences.length)]
              }<a id="fmPlays">, will automatically rebuild after activity found</a><a id="fmGenre"></a>`;
            }
          } catch {
            //
          }
        } else if (data.recenttracks.track.length > 0) {
          if (
            document.getElementById("titledFm").innerHTML ==
              `tanos is currently not listening to anything <a id="fmInformant">∙ according to last.fm</a>` ||
            document
              .getElementById("titledFm")
              .innerHTML.includes("has forced privacy mode")
          )
            rebuildFm();

          var lastTrack = data.recenttracks.track[0];

          if (additional == "direct")
            window.location.href = `https://www.last.fm/music/${
              lastTrack.artist["#text"]
            }/_/${lastTrack.name
              .replace(" ", "+")
              .replace(" ", "+")
              .replace(" ", "+")}`; // 3 different unicodes i believe

          playingSong = `${
            lastTrack.artist["#text"].includes("luxTypes")
              ? "luxTypes"
              : lastTrack.artist["#text"]
          } - ${lastTrack.name}`;

          if (/[^a-zA-Z0-9\s\-\[\]&é,.()'$*!+\/%"]/.test(playingSong))
            document.getElementById("fmPlaying").style.fontFamily = "altlang";
          else document.getElementById("fmPlaying").style.fontFamily = "nfont";

          document.getElementById("fmPlaying").textContent = playingSong;

          if (prev != playingSong + " => " + setModus) {
            var thefinalartist;

            if (
              !lastTrack.artist["#text"].toLowerCase() != "tyler, the creator"
            )
              thefinalartist = `${lastTrack.artist["#text"].split(",")[0]}`;
            else thefinalartist = lastTrack.artist["#text"];

            lastfm.artist.getTopTags(
              { artist: thefinalartist, user: last_fm_user },
              {
                success: function (data) {
                  var topTags = data.toptags.tag
                    .slice(0, 3)
                    .map((tag) => tag.name)
                    .join(", ");

                  topTags = topTags.replace(
                    /rape|official shit|garbage|pedophile|ugly|trannycore|pedocore|earrape|nazism|nsbm|lolicore|jermacore|jermastep|brony|swiftie|bullshit|urine|furry|gore|vore|ukraine/g,
                    ""
                  ); // Tag cleanify
                  topTags = topTags.replace(", ,", ","); // After cleanup
                  topTags = topTags.replace("seen live", "live artist"); // Misunderstanding of tags

                  topTags = topTags.toLowerCase();
                  var additional_topTags = "";

                  switch (thefinalartist) {
                    case "luxTypes":
                    case "FE2 Community Maps OST":
                    case "LemmyLada":
                    case "DominoContributing":
                    case "GamesAreJust4fun":
                    case "Manel Navola":
                    case "ImJohny":
                    case "Crazyblox":
                    case "Valorant":
                      topTags = "video game music";
                      break;
                    case "Arianne":
                    case "Dark Soul":
                    case "Yoko Takahashi":
                    case "Shiro SAGISU":
                    case "Megumi Hayashibara":
                    case "林原めぐみ":
                    case "datfootdive":
                    case "鷺巣詩郎":
                      additional_topTags =
                        '<a id="evangelionref">evangelion!!!!!!!</a>';
                      break;
                    default:
                      if (topTags.length < 2) {
                        topTags = "no genres found";
                      }
                      break;
                  }

                  document.getElementById("fmGenre").innerHTML = `${topTags}${
                    additional_topTags.length > 1
                      ? ", " + additional_topTags
                      : ""
                  }`;
                },
              }
            );
          } else {
          }

          var cached_playcount = `...`;

          if (prev != playingSong + " => " + setModus) {
            lastfm.track.getInfo(
              {
                artist: `${lastTrack.artist["#text"]}`,
                track: `${lastTrack.name}`,
                user: last_fm_user,
              },
              {
                success: function (data) {
                  var trackInfo = data.track;
                  cached_playcount = `${trackInfo.userplaycount}`;

                  if (setModus == "song") {
                    document.getElementById(
                      "doonat"
                    ).innerHTML = `donations accepted via <a href="https://www.paypal.com/paypalme/tanospaypal" style="cursor:pointer;" onclick="window.location = 'https://www.paypal.com/paypalme/tanospaypal'">paypal</a>`;
                    document.getElementById("fmPlays").textContent = `${
                      trackInfo.userplaycount || "?"
                    } plays`;
                  }

                  var lovedSentences = [
                    "∙ ooh! this one is personally loved by tanos",
                    "∙ ouh! this one is personally loved by tanos",
                    "∙ !! this one is personally loved by tanos",
                    "∙ marked as favorite by tanos",
                    "∙ tanos found this song pretty good",
                    "∙ tanos is in love with this one",
                    "∙ love love love !!",
                    "∙ hearted by tanos",
                    "∙ yessssssssssssssssssss",
                    "∙ YEAAH THIS ONE IS GOOD, love from tanos!!",
                    "∙ marked as loved by tanos",
                  ];
                  var informantSentences = [
                    "∙ live updated by last.fm",
                    "∙ automatically refreshed !",
                    "∙ live information by last.fm",
                    "∙ automatically updated !",
                    "∙ live data by last.fm",
                    "∙ automatically changing !",
                    "∙ updates automatically",
                    "∙ provided by last fm",
                    "∙ by last fm",
                    "∙ grabbed with last fm",
                    "∙ live data",
                    "∙ up to date information",
                  ];

                  document.getElementById("fmInformant").style.color =
                    "rgba(255, 255, 255, 0.7);";
                  const isLoved = trackInfo.userloved === "1";
                  document.getElementById("fmLoved").style.display = isLoved
                    ? "inline-block"
                    : "none";
                  document.getElementById("fmInformant").textContent = isLoved
                    ? lovedSentences[
                        Math.floor(Math.random() * lovedSentences.length)
                      ]
                    : informantSentences[
                        Math.floor(Math.random() * informantSentences.length)
                      ];
                  document.getElementById("fmInformant").style.color = isLoved
                    ? "rgb(226, 85, 214, 1)"
                    : "rgba(255, 255, 255, 0.7)";

                  if (setModus == "artist" || additional == "artist") {
                    var arts = `${lastTrack.artist["#text"]}`;
                    lastfm.user.getTopArtists(
                      { user: last_fm_user },
                      {
                        success: function (data) {
                          const artistData = data.topartists.artist.find(
                            (artist) => artist.name === arts
                          );
                          if (artistData) {
                            const playcount = artistData.playcount; // Get the playcount
                            if (cached_playcount < playcount)
                              // last fm is sometimes really buggy idk why
                              document.getElementById(
                                "fmPlays"
                              ).textContent = `${playcount || "?"} plays`;
                            else
                              document.getElementById(
                                "fmPlays"
                              ).textContent = `${
                                cached_playcount || "?"
                              } plays`;
                            show_paypal = true;
                          } else {
                            document.getElementById("fmPlays").textContent = `${
                              cached_playcount || "?"
                            } plays`;
                            document.getElementById(
                              "doonat"
                            ).innerHTML = `<a id="fmfoot_err">!! artist playcount not available for this artist</a>`;
                            show_paypal = false;
                          }
                        },
                      }
                    );
                  }

                  if (show_paypal)
                    document.getElementById(
                      "doonat"
                    ).innerHTML = `donations accepted via <a href="https://www.paypal.com/paypalme/tanospaypal" style="cursor:pointer;" onclick="window.location = 'https://www.paypal.com/paypalme/tanospaypal'">paypal</a>`;
                },
              }
            );
          } else {
          }

          if (document.getElementById("fmPlays").innerHTML == "...")
            // would be too late here for a check, unless you want the site to look slow
            document.getElementById("fmPlays").innerHTML =
              cached_playcount === undefined ? "?" : cached_playcount;

          tick = tick + 1;
          document.getElementById("fmSwitchable").textContent = setModus;
          const fmTextElement = document.getElementById("fmPlaying");

          if (
            playingSong.toLowerCase().indexOf("i really want to stay") === -1 &&
            playingSong
              .toLowerCase()
              .indexOf("mass of the fermenting dregs") === -1 &&
            fmTextElement.textContent.length > 85
          )
            fmTextElement.textContent =
              fmTextElement.textContent.substring(0, 50) + "...";

          document.getElementById("titledFm").innerHTML =
            last_fm_user !== "tanosshi"
              ? document
                  .getElementById("titledFm")
                  .innerHTML.replace("tanos", last_fm_user)
              : document.getElementById("titledFm").innerHTML;

          prev = playingSong + " => " + setModus;
        } else {
          hideFM();
        }
      },
      error: function (code, message) {
        hideFM();
        log("[!!] " + code, message);
      },
    }
  );
}

function hideFM() {
  ["titledFm", "playsngenreFm", "fmGenre", "fmPlaying"].forEach(
    (id) => (document.getElementById(id).style.display = "none")
  );
}

function updateClock() {
  if (
    $(".time.days").html() == "00 <span>day</span>" &&
    $(".time.hours").html() == "00 <span>H</span>" &&
    $(".time.minutes").html() == "00 <span>M</span>" &&
    $(".time.seconds").html() == "00 <span>S</span>"
  ) {
    //cook() feature isnt implemented anymore
  }
}

setInterval(updateLastFM, 4543 + tick);
setInterval(forceLastFM, 11326);

setInterval(updateClock, 10000);

setInterval(siteHealth, 2251);

function autoReload() {
  window.location.reload();
}
setInterval(autoReload, 86400000);

window.addEventListener("resize", adjustTextonSizeChange);
adjustTextonSizeChange();
