let debug_location = false;

const panelToggle = document.querySelector(".panel-toggle");
const contentWrapper = document.querySelector(".content-wrapper");
const siteTitle = document.querySelector(".site-title");

const input = document.querySelector(".terminal-input");
const terminal = document.querySelector(".terminal-output");
const main = document.querySelector(".main-content");
let commandCount = 0;
let totalCommands;

const commandHistory = [];
let historyIndex = -1;

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const command = input.value;
    const output = document.createElement("p");
    commandCount++;
    totalCommands++;

    commandHistory.push(command);
    historyIndex = commandHistory.length;

    if (commandCount > 3) document.getElementById("logo").innerHTML = "";
    if (commandCount > 5) {
      terminal.innerHTML = "<p></p>";
      commandCount = 0;
    }

    let projects = `<pre style="white-space: pre-wrap; line-height: 1;" id='outputs'>
• ┈┈┈ • ┈┈┈ • ┈┈┈ • ┈┈┈ • ┈┈┈ projects ᓚᘏᗢ\n
┊           ┊     ┊     ★ Quality\n
┊           ┊     ┊     ° . <a onclick="window.location='https://tanos.is-a.dev'">tanos.is-a.dev</a>     \n
┊           ┊     ┊     ₊ . <a onclick="window.location='https://tacogit.github.io/paste'">paste</a>                                                                                    \n
┊           ┊     ┊     . ✫ <a onclick="window.location='https://tacogit.github.io/project/whattocode'">what to code</a>          \n
┊           ┊     ┊\n
┊           ┊     ✫ Decompilations or android ports\n
┊           ┊     ⊹ ｡ <a onclick="window.location='https://github.com/TacoGit/YanSimAndroid'">Yandere Simulator successful decompilation</a>\n
┊           ┊     ︶  ۫ <a onclick="window.location='https://github.com/TacoGit/KS3Android'">Kuudere Simulator android port</a>\n
┊           ┊\n
┊           𐐪 Basics\n
┊          ﹒〣  <a onclick="window.location='https://top.gg/bot/967844118715854908'">Nanobot $XNO crypto wallet <strong>base</strong> for the discord bot</a>      \n
┊           ↷ ⋯ <a onclick="window.location='https://tacogit.github.io/project/player/'">Web MP3/OGG Player</a> \n
┊           ¨ 🎞 <a onclick="window.location='https://tacogit.github.io/project/weather/'">Simplest weather site</a> \n
┊\n
糸 Broken, useless or unfinished projects\n
ˎˊ- Broken - <a onclick="window.location='https://tacogit.github.io/project/ai/'">Bob the AI</a>
ˎˊ- Broken - <a onclick="window.location='https://discord.tacogit.github.io/'">Discord Bot Builder (Link broken)</a>
ˎˊ- Useless - <a onclick="window.location='https://github.com/TacoGit/contact'">Contact tanos</a>
ˎˊ- Useless - <a onclick="window.location='https://github.com/TacoGit/betterPluginInstaller'">betterPluginInstaller (BetterDiscord)</a>
ˎˊ- Useless - <a onclick="window.location='https://github.com/TacoGit/ezWindows'">ezWindows</a>
ˎˊ- Useless - <a onclick="window.location='https://tacogit.github.io/project/setup-pc/'">Setup-PC</a>
ˎˊ- Useless - <a onclick="window.location='https://tacogit.github.io/project/skyline/'">Skyline Emulator Compatibility List</a>
ˎˊ- Unfinished - <a onclick="window.location='https://tacogit.github.io/fwee/'">silly birthday "giveaway"</a>
ˎˊ- Unfinished - <a onclick="window.location='https://tacogit.github.io/project/typetester'">Type Tester (Only partially mine)</a>

⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖  ᓚ₍ ^. .^₎  ▬▬ι═══════ﺤ 
</pre>`;

    const commands = {
        help: 'Available commands: help, clear, echo, whoami, aboutme, projects, music, quote, m8ball',
        commands: 'Available commands: help, clear, echo, whoami, aboutme, projects, music, quote, m8ball',
        whoami: 'im tanos, i just make random projects or decompilations.',
        aboutme: 'im tanos, i just make random projects or decompilations.',
        quote: () => {
            const quotes = [
                "The only way to do great work is to love what you do. - Steve Jobs",
                "Life is what happens when you're busy making other plans. - John Lennon",
                "Get busy living or get busy dying. - Stephen King",
                "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
                "You miss 100% of the shots you don't take. - Wayne Gretzky",
                "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
                "In the end, we only regret the chances we didn't take. - Lewis Carroll",
                "The best way to predict the future is to create it. - Peter Drucker",
                "You must be the change you wish to see in the world. - Mahatma Gandhi",
                "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
                "Believe you can and you're halfway there. - Theodore Roosevelt",
                "Act as if what you do makes a difference. It does. - William James",
                "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
                "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
                "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
                "The way to get started is to quit talking and begin doing. - Walt Disney"
            ];
            return quotes[Math.floor(Math.random() * quotes.length)];
        },
        m8ball: () => {
            const responses = [
                "Yes, definitely.",
                "Ask again later.",
                "Don't count on it.",
                "It is certain.",
                "My sources say no.",
                "Absolutely!",
                "No way!",
                "Maybe, but probably not.",
                "Yes, in due time.",
                "I wouldn't count on it.",
                "Definitely not.",
                "It seems likely.",
                "Very doubtful.",
                "Yes, but be cautious.",
                "The outlook is good.",
                "I wouldn't hold my breath."
            ];
            
            return responses[Math.floor(Math.random() * responses.length)];
        },

        echo: (cmd) => cmd.slice(5).trim() || '<span id="commandfail">Error:</span> No text provided to echo.',
        clear: () => { terminal.innerHTML = "<p></p>"; return ''; },
        exit: () => { window.location.href = "https://google.com"; javascript:close(); return ''; },

        projects: () => { terminal.innerHTML = `<pre id="outputs">im loading this pretty boy for you up 1 second\nbooyaaaaahhaa</pre>`; return ''; },
        project: () => { terminal.innerHTML = `<pre id="outputs">im loading this pretty boy for you up 1 second\nbooyaaaaahhaa</pre>`; return ''; },
        projectlist: () => { terminal.innerHTML = `<pre id="outputs">im loading this pretty boy for you up 1 second\nbooyaaaaahhaa</pre>`; return ''; },

        music: () => {
          terminal.innerHTML = `<pre id="outputs"><span id="movingvis">ılı.lıllılıı.ıllı</span>
↳ tanos is listening to ;;
${finalizedsong}
0:56 ——•———————— 3:24
↺   <<    ll    >>  ⋮ ≡</pre>`; return ''; }

      };

    const commandKey = command.toLowerCase().split(" ")[0];
    if (commands[commandKey]) {
        console.log(commands[commandKey], commandKey, commands)
        const response = typeof commands[commandKey] === 'function' ? commands[commandKey](command) : commands[commandKey];
        output.innerHTML = `<span id="outputs">${response}</span>`;
    } else {
        output.innerHTML = `<span id="commandfail">Unknown command:</span> ${command}`;
    }

    setTimeout(() => {
      new TextScrambler("#outputs", {
        updateInterval: 0.01,
        restoreDelay: 0.001,
        restoreInterval: 0.01
      });

      if(commandKey == "projects" || commandKey == "project" || commandKey == "projectlist") {
        setTimeout(() => {
          document.getElementById("outputs").innerHTML = projects;
          var outputs = document.querySelectorAll("#outputs");
          outputs.forEach(output => {
            output.id = "outputold";
          });
        }, 1500);
      } else {
        var outputs = document.querySelectorAll("#outputs");
        outputs.forEach(output => {
          output.id = "outputold";
        });
      }
    }, 2);

    terminal.appendChild(output);
    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
    terminal.scrollTop = main.scrollHeight;
  }
});


new TextScrambler("#site-title-subtext");

/*
  new TextScrambler('.some-element', {
      symbols: '$#@!%',
      updateInterval: 0.2,
      restoreDelay: 2000,
      restoreInterval: 300
  });
*/

let userLat = 0;
let userLong = 0;
let isLoading = true;

function getIP(json) {
  const dot = document.getElementById("location-dot");
  dot.classList.add("loading");

  if (!debug_location) {
    fetch(`https://ipapi.co/${json.ip}/json/`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        userLat = data.latitude;
        userLong = data.longitude;
        isLoading = false;
        dot.classList.remove("loading");
        updateDotPosition();
        document.getElementById("unpingable").textContent =
          "You're located at " + data.city + ", " + data.region;
        const cityCookie = document.cookie
          .split("; ")
          .find(row => row.startsWith("city="));
        if (cityCookie) {
          const city = cityCookie.split("=")[1];
          if (city !== data.city) {
            document.getElementById("unpingable").style.color = "#f72234";
            document.querySelector(".location-panel").innerHTML =
              "This is not you...";
            dot.classList.add("error");
            document.getElementById("unpingable").textContent =
              "You're using a vpn . . .";
            new TextScrambler("#unpingable", {
              updateInterval: 0.2,
              restoreDelay: 1000,
              restoreInterval: 100
            });
          }
        } else {
          document.cookie = `city=${data.city}; max-age=86400; path=/`;
        }
      })
      .catch(error => {
        console.error("Error fetching location:", error);
        dot.classList.add("error");
        new TextScrambler("#unpingable", {
          updateInterval: 0.2,
          restoreDelay: 500,
          restoreInterval: 50
        });
      });
  } else {
    isLoading = false;
    dot.classList.remove("loading");
    userLat = 47.6114;
    userLong = -122.32985;
    updateDotPosition();
    document.getElementById("unpingable").textContent =
      "Location has been set to Seattle, WA";
    new TextScrambler("#unpingable", {
      updateInterval: 0.2,
      restoreDelay: 500,
      restoreInterval: 50
    });
  }
}

function updateDotPosition() {
  // WHAT A PAIN WTF
  if (isLoading) return;

  const dot = document.getElementById("location-dot");
  const map = document.querySelector(".background-map");

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const widthRatio = Math.min(windowWidth / 1920, 1);
  const horizontalRange = 90 - 20 * widthRatio;
  const MAP_LEFT = (100 - horizontalRange) / 2 + 1 * 12.52;
  const MAP_RIGHT = 100 - MAP_LEFT;

  const heightRatio = Math.min(windowHeight / 1080, 1);
  const verticalRange = 18 + 16 * heightRatio;
  const MAP_TOP = 42 - 7 * heightRatio - 0.3;
  const MAP_BOTTOM = MAP_TOP + verticalRange;

  const MAP_WIDTH = MAP_RIGHT - MAP_LEFT;
  const MAP_HEIGHT = MAP_BOTTOM - MAP_TOP;

  const xPos = MAP_LEFT + (userLong + 180) / 360 * MAP_WIDTH;
  const yPos = MAP_TOP + (90 - userLat) / 180 * MAP_HEIGHT;

  dot.style.left = `${xPos > 72.1
    ? xPos * 1.15
    : xPos < 33 ? xPos / 1.08 : xPos}%`;
  dot.style.top = `${yPos > 70
    ? 30
    : window.innerWidth < 500 ? yPos + 2.8 : yPos}%`;

  console.log(`Window: ${windowWidth}x${windowHeight}`);
  console.log(
    `Map bounds: Left ${MAP_LEFT}%, Right ${MAP_RIGHT}%, Top ${MAP_TOP}%, Bottom ${MAP_BOTTOM}%`
  );
  console.log(`Coordinates: ${userLat}, ${userLong}`);
  console.log(`Position: ${xPos}%, ${yPos}%`);
}

window.addEventListener("resize", updateDotPosition);
window.addEventListener("load", () => {
  const map = document.querySelector(".background-map");
  map.addEventListener("load", updateDotPosition);
});


function whostanos() {
  var profsilePic = document.getElementById("pf1");
  profsilePic.style.transition = "box-shadow 1s";
  profsilePic.style.boxShadow = "0 0 0 100000px rgba(170, 60, 84, 0.52)";

  setTimeout(() => {
    profsilePic.style.opacity = "0";
    profsilePic.style.display = "none";
  }, 1000);

  const contentWrapper = document.querySelector(".content-wrapper");
  const allContent = document.querySelectorAll(
    "body > *:not(.content-wrapper):not(#pf1)"
  );

  contentWrapper.style.display = "flex";
  contentWrapper.style.opacity = "0";
  contentWrapper.style.transition = "opacity 0.81225s";
  setTimeout(() => {
    contentWrapper.style.opacity = "1";
  }, 0);

  allContent.forEach(element => {
    element.style.transition = "filter 0.81225s";
    element.style.filter = "blur(15px)";
  });

  const profilePic = document.querySelector(".profile-pic");
  profilePic.style.animation = "pulse 1.1s";
  setTimeout(() => {
    profilePic.style.animation = "none";
  }, 1100);
}

document.addEventListener("DOMContentLoaded", function() {
  const locationDot = document.getElementById("location-dot");

  locationDot.addEventListener("click", function(e) {
    e.stopPropagation();
    this.classList.toggle("active");
  });

  document.addEventListener("click", function(event) {
    if (!locationDot.contains(event.target)) {
      locationDot.classList.remove("active");
    }
  });
});

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  let timeString;

  timeString =
    window.innerWidth < 500
      ? now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : now.toLocaleTimeString();

  const dateString = now.toLocaleDateString();

  timeElement.textContent =
    window.innerWidth < 768 ? timeString : `${dateString} ${timeString}`;
}

setInterval(updateTime, 1000);
updateTime();


// last fm
var fmPrivacyMode = true;
var setModus = "song";
var isHardPrivacyToggled // future
var prev;
var last_fm_user = "tanosshi"
var finalizedsong;

function updateLastFM(additional) {
    var cache = new LastFMCache(); // Request Cache

    var lastfm = new LastFM({
      apiKey    : '219c75f1150728c565372e20d648430e',
      cache     : cache
    });

    lastfm.user.getRecentTracks({user: last_fm_user}, {success: function(data){
      try {
        var attemptAtConnection = data.recenttracks.track[0]["@attr"].nowplaying // i shall not overload the fm servers
      } catch {
        var attemptAtConnection = undefined;
      }

      if (fmPrivacyMode && attemptAtConnection != undefined) {
        if (["wockstxrr", "unknown", "Testimony", "PW1", "Unknown", "wockstarr", "Big Man Gaming", "slitue", "Tonil", "null", "1uke", "fred", "KyaGaKill", "DIXMONDZ", "lain", "ansu", "your audio plug.", "matias", "thriiiedd", "jaleelsthinking", "mentallyscared", "Tonilk_2", "Tonilk", "ciaffa", "Devil's Work", "l.o.f.e", "alexedits", "Mashstache", "KILLxKILL", "Tonilk_", "Jean", "rayy", "666ep", "finesse", "Zeroh", "dex535", "User 45410008", "zeroh", "TrenHub", "daexnight", "#Real", "some random name", "kxrrvpt", "tiktokaudioguy", "wockstarr", "crazycookiemaniac", "User ", "maxnotwell327", "tea", "kingpin. (real)", "real", "kxrr", ""].includes(data.recenttracks.track[0].artist['#text'])) {
            attemptAtConnection = undefined;
        }
      }
      
      console.log(data.recenttracks.track[0]) // curent track

      // soon to calculate average music time
      //const track1date = data.recenttracks.track[1].date['#text']; // track 1 date
      //const track2date = data.recenttracks.track[2].date['#text']; // track 2 date
      //if (track1date.split(', ')[0] == track2date.split(', ')[0]) {
      //  var averagetime = (parseInt(track1date.split(', ')[1].replace(":", "")) - parseInt(track2date.split(', ')[1].replace(":", "")));
      //  console.log(averagetime)
      //}
      //console.log(track1date);
      //console.log(track2date);

      if (data.recenttracks.track.length > 0) {
        var lastTrack = data.recenttracks.track[0];

        if (additional == "direct")
            window.location.href = `https://www.last.fm/music/${lastTrack.artist['#text']}/_/${(lastTrack.name).replace(" ", "+").replace(" ", "+").replace(" ", "+")}`; // 3 different unicodes i believe

        finalizedsong = `${lastTrack.name} - ${lastTrack.artist['#text'].includes('luxTypes') ? "luxTypes" : lastTrack.artist['#text']}`
      } else { hideFM() }
}, error: function(code, message){ 
  //
}});}

function musicvismover() {
  try {
    new TextScrambler("#movingvis", {
      symbols: 'ılı.lıllılıı.ıllı',
      updateInterval: 100,
      restoreDelay: 100,
      restoreInterval: 250
    });
  } catch {
    //
  }
}

setInterval(musicvismover,500);
setInterval(updateLastFM, 7800); //sorry last.fm