window.onload = function() {
  let currentDate = new Date();
  let min = currentDate.getMinutes()
  let time
  min = min.toString()
  console.log(min.length)
  if (min.length == 1) {
    time = currentDate.getHours() + ":0" + currentDate.getMinutes()
  } else {
    time = currentDate.getHours() + ":" + currentDate.getMinutes()
  }
  document.querySelector("a#time").innerHTML = time
};

(function() {
  "use strict";
  var btnUpload = document.querySelector("#btn-upload"),
    fileElement = document.querySelector("#file-element"),
    themeLight = document.querySelector("#theme-light"),
    themeDark = document.querySelector("#theme-dark"),
    colorGreen = document.querySelector("#btn-green"),
    colorBlue = document.querySelector("#btn-blue"),
    colorRed = document.querySelector("#btn-red"),
    colorPink = document.querySelector("#btn-pink"),
    htmlTag = document.querySelector('html'),

    setLocalStorage = function(item, value) {
      if (localStorage) {
        localStorage.setItem(item, value);
      } else {
        return "";
      }
    },

    getLocalStorage = function(item) {
      if (localStorage.getItem(item)) {
        return localStorage.getItem(item);
      }

      return "";
    },

    setTheme = function(theme) {

      theme = theme || "light";
      htmlTag.className = htmlTag.className.replace(/dark|light/g, "");
      htmlTag.className += " " + theme;

      setLocalStorage("theme", theme);
    },

    setColor = function(color) {

      color = color || "green";
      htmlTag.className = htmlTag.className.replace(/blue|red|green|pink/g, "");
      htmlTag.className += " " + color;

      setLocalStorage("color", color);
    };

  if (localStorage) {
    setTheme(getLocalStorage('theme'));
    setColor(getLocalStorage('color'));
  }

  btnUpload.addEventListener("click", function(e) {
    if (fileElement) {
      fileElement.click();
    }

    e.stopPropagation();
    e.preventDefault();
  }, false);

  fileElement.addEventListener("change", function() {
    var context = new AudioContext({ sampleRate: 44100 });
    // Play
    var i,
      len = this.files.length;
    var plrr = this.files;


    Player.clearPlayList();
    for (i = 0; i < len; i += 1) {
      Player.setPlayList(this.files[i]);
    }

    Player.playMusic.apply(Player, [0]);

    //Player.createPlayList();

    // Grab Tempo // TOO LAGGY!
    var filesTempo = plrr;

    if (filesTempo.length == 0) return;
    var readerTempo = new FileReader();

    readerTempo.onload = function(fileEventTempo) {
      //context.decodeAudioData(fileEventTempo.target.result, calcTempo);
    }

    //readerTempo.readAsArrayBuffer(filesTempo[0]);
  }, false);
}());

var calcTempo = function(buffer) {
  var audioData = [];
  // Take the average of the two channels
  if (buffer.numberOfChannels == 2) {
    var channel1Data = buffer.getChannelData(0);
    var channel2Data = buffer.getChannelData(1);
    var length = channel1Data.length;
    for (var i = 0; i < length; i++) {
      audioData[i] = (channel1Data[i] + channel2Data[i]) / 2;
    }
  } else {
    audioData = buffer.getChannelData(0);
  }
  var mt = new MusicTempo(audioData);

  console.log(mt.tempo);
  console.log(mt.beats);
  console.log("Finalized BPM: " + Math.round(mt.tempo))
  document.getElementById("bpm").innerHTML = Math.round(mt.tempo)
}

var z = 0
function more() {
  if (z == 0) {
    document.getElementById("sm").style.borderBottomLeftRadius = "0px";
    document.getElementById("sm").style.borderBottomRightRadius = "0px";
    document.getElementById("am").style.borderTopLeftRadius = "0px";
    document.getElementById("am").style.borderTopRightRadius = "0px";
    document.getElementById("am").style.opacity = "1";
    z = 1;
    console.log("z0 to z1")
    return
  } 
  if (z == 1) {
    document.getElementById("sm").style.borderBottomLeftRadius = "15px";
    document.getElementById("sm").style.borderBottomRightRadius = "15px";
    document.getElementById("am").style.borderTopLeftRadius = "15px";
    document.getElementById("am").style.borderTopRightRadius = "15px";
    document.getElementById("am").style.opacity = "0";
    z = 0;
    console.log("z1 to z0")
    return
  }
}
var u = 1
function clock() {
  if (u == 0) {
    document.querySelector("h1").style.opacity = "0.4";
    u = 1;
    console.log("u0 to u1")
    return
  } 
  if (u == 1) {
    document.querySelector("h1").style.opacity = "0";
    u = 0;
    console.log("u1 to u0")
    return
  }
}

var n = 0
function notepad() {
  if (n == 0) {
    document.querySelector(".notepad").style.opacity = "0.5";
    document.querySelector(".notepad").style.pointerEvents = "auto";
    n = 1;
    console.log("n0 to n1")
    return
  } 
  if (n == 1) {
    document.querySelector(".notepad").style.opacity = "0";
    document.querySelector(".notepad").style.pointerEvents = "none";
    n = 0;
    console.log("n1 to n0")
    return
  }
}


const wrapper = document.querySelector(".notepad")
    function onDrag({movementX, movementY}){
      let getStyle = window.getComputedStyle(wrapper);
      let leftVal = parseInt(getStyle.left);
      let topVal = parseInt(getStyle.top);
      wrapper.style.left = `${leftVal + movementX}px`;
      wrapper.style.top = `${topVal + movementY}px`;
    }
    wrapper.addEventListener("mousedown", ()=>{
      wrapper.classList.add("active");
      wrapper.addEventListener("mousemove", onDrag);
    });
    document.addEventListener("mouseup", ()=>{
      wrapper.classList.remove("active");
      wrapper.removeEventListener("mousemove", onDrag);
});