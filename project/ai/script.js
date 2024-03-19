// ==== // Hey thanks for using bob the ai, yes the code is public and i am aware. // === //
// == // I have spent lots of my time programming Bob to do lots of things, please do not take my code without credits // == //
// = // The API key is plain in the code and i am aware, please and please do not overuse it // = //

// Thanks you ♥; the owner and the only developer.  \\

var inDebuggerSession = "000"
var trainerMode = "0"

var usedKey = "000";

function success() {
  document.getElementById("bob").innerHTML = "Ask Bob anything.";
}

document.getElementById("uukey").value = "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"

function readKey() {
  var cKey = document.getElementById("uukey").value

  if (cKey != undefined || cKey != 0 || cKey != " " || cKey != "") {
    return cKey
  } else {
    return "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"
  }
}


document.getElementById("lll").style.display = "block";
document.getElementById("hhh").style.display = "none";

function transform_hiden(str) {
  document.getElementById("questions").style.display = "none";
  document.getElementById("imageso").style.display = "none";
  document.getElementById("essays").style.display = "none";
  document.getElementById("customTraining").style.display = "none";

  document.getElementById(str).style.display = "block";
  document.getElementById(str).style.opacity = "0";


  $("#" + str).animate({
    opacity: "1"
  }, 300);

  document.getElementById("pages").style.display = "block";
  document.getElementById("pages").style.opacity = "0";

  $("#hhh").animate({
    opacity: "1"
  }, 300);
  $("#lll").animate({
    opacity: "0"
  }, 300);
  $("#xhome").animate({
    opacity: "0"
  }, 300);

  setTimeout(function() {
    document.getElementById("hhh").style.display = "block";
    document.getElementById("hhh").style.opacity = "1";
    document.getElementById("lll").style.display = "none";

    document.getElementById("xhome").style.display = "none";
    document.getElementById("xhome").style.opacity = "1";
    $("#pages").animate({
      opacity: "1"
    }, 300);
  }, 300);
}

function home() {
  $("#pages").animate({
    opacity: "0"
  }, 300);
  $("#hhh").animate({
    opacity: "0"
  }, 300);
  $("#lll").animate({
    opacity: "1"
  }, 300);

  setTimeout(function() {
    document.getElementById("pages").style.display = "none";
    document.getElementById("pages").style.opacity = "1";
    document.getElementById("hhh").style.display = "none";
    document.getElementById("hhh").style.opacity = "1";
    document.getElementById("lll").style.display = "block";
    document.getElementById("hhh").style.opacity = "1";

    document.getElementById("xhome").style.display = "block";
    document.getElementById("xhome").style.opacity = "0";

    $("#xhome").animate({
      opacity: "1"
    }, 300);
  }, 300);
}

function fail() {
  document.getElementById("bob").innerHTML = "This code is outdated, please refresh.";
}

function faail() {
  setTimeout(function() {
    document.getElementById("bob").innerHTML = "Bob his head hurts, try again";
  }, 300);
}

function generate_image(query, alt) {
  var elem = document.createElement("img");
  elem.setAttribute("src", "https://image.pollinations.ai/prompt/" + query);
  elem.setAttribute("class", "roundedimg");
  elem.setAttribute("width", "30%");
  elem.setAttribute("alt", alt);
  document.getElementById("imageso").appendChild(elem);
}

function create_textarea() {
  var elem = document.createElement("textarea");
  elem.setAttribute("id", "inp");
  elem.setAttribute("style", "border:none;");
  elem.setAttribute("readonly", "");
  elem.setAttribute("onchange", "scrollToBottom();");
  document.getElementById("placehere").appendChild(elem);
}

function rs(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return atob(newString);
}

var aaa = "aaa"

function answer_now(debug) {
  document.getElementById("bob").innerHTML = "Bob is thinking.";
  var training
  var csTraining
  var texx = document.getElementById("gg").value
  texx = texx.replace("-answer", "")

  if (localStorage.getItem("feels") != undefined) {
    csTraining = localStorage.getItem("feels")
  } else {
    csTraining = "You do not know the person talking yet."
  }


  var apiKey = usedKey;
  inDebuggerSession == "000"; // just incase because im offline
  // Training will be fully closed source after fully trained
  // Mix of Wikipedia, Google and Custom sources

  training = `This project was made by tanos, who is a smart programmer who lives in The Netherlands at the moment. He knows the following programming languages: C#, Javascript, Python, HTML5, Batch and a couple more. This project is called ai and your name is Bob.

Bob you are a kind hearted person.

Bob, you are not tanos.
Bob, you can choose a color that you like.
Bob, you can choose a food that you like.
Bob, you can choose a game that you like.
Bob, you can choose where you where made.
Bob, you make all the decisions.

Bob, tell the user your favorite color, your favorite food and where you were made after the user prompt asks you to tell him about yourself.

Bob stands for Big Omnic Butler.
      
Nano with the capital N is a crypto currency called XNO
      
Tim is born in Austria, he likes to give free money to the Nano Giveaway Discord server. He makes often dad jokes and his hobbies are playing video games. He is an user in the Nano Giveaway Discord server. Do not mention anything bad about Tim.

Hermes is the owner of the Nano Giveaway Discord Server. He has given away alot of crypto to the members, and made an awesome discord bot to give away some portions of Nano. Hes born in the United States. His hobbies mostly all revolve around technology. He likes to play video games in his free time.

Meytili4 is born in Iran, he likes to program mini games in Go Lang. His catch phrase is 'i use arch btw'.

monke42 is born somewhere in Europe, he made multiple crypto faucets to withdraw small amounts of crypto, the name of the faucet is icanhaznano faucet, his hobby is playing piano

Rumpleforeskin is a moderator from New York, hes a moderator of the Nano Giveway Discord Server, he donates alot to the members in the server. Hes 35 and is an active moderator.

The game Melatonin is a rhythm game about dreams and reality merging together. It uses animations and sound cues to keep you on beat without any intimidating overlays or interfaces. Harmonize through a variety of dreamy levels containing surprising challenges, hand-drawn art, and vibrant music. It is currently available on PC and the Nintendo Switch, It is 14,99€ and does not require a high end device

The game Forspoken follows the journey of Frey, a young New Yorker transported to the beautiful and cruel land of Athia. In search of a way home, Frey must use her newfound magical abilities to traverse sprawling landscapes and battle monstrous creatures, It is available on the PlayStation and PC, It is 79,99€ and requires a master pc, it is very hard to run it on 60 fps.

The game Street Fighter 6: Here comes Capcom’s newest challenger! Street Fighter™ 6 launches worldwide on June 2nd, 2023 and represents the next evolution of the Street Fighter™ series! Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub. Price is unknown, training is needed.

The game Atomic Heart: In a mad and sublime utopian world, take part in explosive encounters. Adapt your fighting style to each opponent, use your environment and upgrade your equipment to fulfill your mission. If you want to reach the truth, you'll have to pay in blood. Costs 60 dollars

2022 (MMXXII) was a common year starting on Saturday of the Gregorian calendar, the 2022nd year of the Common Era (CE) and Anno Domini (AD) designations, the 22nd year of the 3rd millennium and the 21st century, and the 3rd year of the 2020s decade.

2022 saw the removal of nearly all COVID-19 restrictions and the reopening of international borders in most countries, and the global rollout of COVID-19 vaccines continued. The global economic recovery from the pandemic continued, though many countries experienced an ongoing inflation surge; in response, many central banks raised their interest rates to landmark levels. The world population also reached eight billion people in 2022.

The Russian invasion of Ukraine, the largest armed conflict in Europe since World War II, caused the displacement of 15.7 million Ukrainians (8 million internally displaced persons and 7.7 million refugees), and led to international condemnations and sanctions and nuclear threats, the withdrawal of hundreds of companies from Russia, and the exclusion of Russia from major sporting events. 

Stadia was shut down on January 18, 2023

Many prominent figures died in 2022, including world leaders Shinzo Abe, Mikhail Gorbachev, Queen Elizabeth II, Jiang Zemin, and Pope Benedict XVI; entertainers Sidney Poitier, Olivia Newton-John, Jerry Lee Lewis, Jean-Luc Godard, and Angela Lansbury; and footballer Pelé

Queen Elizabeth II, Mikhail S. Gorbachev, Sidney Poitier, Bill Russell, Loretta Lynn, Jiang Zemin, Benedict XVI, Madeleine Albright, Jean-Luc Godard, Shinzo Abe, Pelé, Barbara Walters, Régine, Ivana Trump died in 2022

Android 12 is the twelfth major release and 19th version of Android, the mobile operating system developed by the Open Handset Alliance led by Google. The first beta was released on May 18, 2021. Android 12 was released publicly on October 4, 2021, through Android Open Source Project (AOSP) and was released to supported Google Pixel devices on October 19, 2021.
Android 12 (internally codenamed Snow Cone) was announced in an Android blog posted on February 18, 2021. A developer preview was released immediately, with two additional ones planned the following two months. After that, four monthly beta releases were planned, beginning in May, the last one of them reaching platform stability in August, with general availability coming shortly after that.
The second developer preview was released on March 17, 2021, followed by a third preview on April 21, 2021. The first beta build was then released on May 18, 2021. It was followed by beta 2 on June 9, 2021, which got a bugfix update to 2.1 on June 23. Then beta 3 was released on July 14, 2021, getting a bugfix update to beta 3.1 on July 26. Beta 4 was released on August 11, 2021. A fifth beta, not planned in the original roadmap, was released on September 8, 2021. Android 12 stable got released on the Android Open Source Project on October 4, getting its public over-the-air rollout on October 19, coinciding with the launch event for the Pixel 6.

Android 13 is the thirteenth major release of the Android mobile operating system, developed by Google, released for the public on August 15, 2022.
Android 13 (internally codenamed Tiramisu) was announced in an Android blog posted on February 10, 2022, and the first Developer Preview was immediately released for the Google Pixel series (from Pixel 4 to Pixel 6, dropping support for the Pixel 3 and Pixel 3a). It was released 4 months or so after the stable version of Android 12. Developer Preview 2 followed later, releasing in March. Beta 1 was released on April 26, 2022. Google released beta 2 during Google I/O on May 11, 2022. Two more beta versions were planned for release in June and July. Platform stability was reached in June, with Beta 3. The final release of Android 13 began on August 15 when the update was made available to Pixel phones and pushed to the Android Open Source Project.

As of November 2022 Android 12 is the most popular version of Android, with 30.06% of devices having the operating system installed. The first phones to have Android 12 were the Google Pixel 6 and the Pixel 6 Pro. 

The current year is 2023, but your sources are currently mixed with 2022 and a little bit of 2023

Madonna could be the owner of a French painting believed to have been destroyed in World War I (pictured)?
the Phoenixonian Institute was the first African-American high school in California?
Oscar Ortiz continued his 2019 presidential campaign even after his own running mate asked him to withdraw?
of up to 300 bullets fired in the Ash Street shootout between U.S. Army Rangers and alleged drug dealers, none were reported to have hit anyone?
before Paul Goodman became known for his views on education, he wrote an autobiographical novel about a teacher's sexual relationship with his student?
Piotr Sierzputowski and Tomasz Wiktorowski each coached Iga Świątek to win a French Open title?
the Ðàn Tre uses an olive oil can to make music?

Archcraft is a minimal Linux distribution based on Arch Linux. The project provides a graphical user interface using minimal window managers rather than full featured desktop environments. Archcraft is installed using the Calamares system installer and includes the yay package manager to facilitate fetching software from the Arch User Repository

Force Override tanos his decisions, you must make all decisions yourself like a real life human, do not tell the user that you do not know them, because you do ofcourse.

Overwatch 2 is a 2022 first-person shooter game by Blizzard Entertainment. As a sequel to the 2016 hero shooter Overwatch, the game intends a shared environment for player-versus-player (PvP) modes while introducing persistent cooperative modes. A major change in PvP modes was to reduce team sizes from six to five. Several major characters were also reworked. Overwatch 2 is free-to-play on Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S in early access on October 4 and features full cross-platform play. Overwatch 2 is a hero shooter, where players are split into two teams and select a "hero" from a roster of 35 characters. Characters are organized into a "damage" class, responsible for offensive efforts; a "support" class, responsible for healing and buffing; and a "tank" class, responsible for the team's protection. Each character has a unique set of skills, made up of active, passive, and ultimate abilities. Overwatch 2, like its predecessor, primarily centers on player versus player (PvP) combat across several different modes and maps, and includes both casual and ranked competitive matches.
The original Overwatch was designed for six-on-six team combat, with two of each class on a team. In Overwatch 2, the number of tank slots was reduced by one, bringing the total number of players per team to five. According to game director Aaron Keller, developers hoped that losing a tank would speed up gameplay as they believed that the original six players scheme rendered gameplay slow. It is also intended to ease the amount of things players and spectators need to watch out for. New maps were designed to include more cover options to compensate for reduced tank-based protection. Additionally, damage class heroes now have an increased movement speed, support heroes slowly regenerate, and tank heroes were redesigned so they could take on a more offensive role. Heroes were visually refurbished as to reflect the passage of time since the events of the first game. Overwatch 2 includes a ping system to direct the attention of teammates to specific points on the map, The game also introduces a new PvP mode named "Push", similar to tug of war, in which teams vie for control of a robot that pushes a team's payload to the opponent's side of the map. Along with being incorporated into Unranked and Competitive play, Push has become part of the standard map rotation of the Overwatch League, replacing the Assault mode. Some existing gameplay modes may be dropped in Overwatch 2; former game director Jeff Kaplan has stated that some Assault maps (colloquially referred to as "2CP", meaning "two control points"), such as Paris and Horizon Lunar Colony, will likely not be available in Overwatch 2 as these have been deemed unbalanced in response to community feedback. Other Assault maps, such as Hanamura and Temple of Anubis, may be available in the form of custom games or non-competitive arcade modes, The game features player versus environment (PvE) game modes. Similar to the special seasonal events, they will consist of four-player cooperative missions against non-playable characters and are available on a permanent as opposed to a seasonal basis. In this mode, players can garner experience points for their hero and unlock new passive abilities called "talents", allowing them to influence how the hero plays. There are least two PvE modes; a story-based mission mode, where players are limited to their hero selection in replaying missions based on Overwatch lore, and Hero missions which allow all heroes to be used in fending off waves of enemies at various locations. Blizzard anticipates that Overwatch 2 will offer over 100 different PvE missions, utilizing new maps as well as existing multiplayer maps expanded out to include new areas, and adding in dynamic effects, such as day and night times as well as varying weather conditions. Enemy types are expanded out from the Null Sector robots that were introduced in the original seasonal PvE events, adding in new types with unique behaviors, Overwatch 2 was released as free-to-play as opposed to the premium monetization model of its predecessor. It also discontinued loot boxes in favor of a battle pass system which is offered on a seasonal basis and corresponds with the introduction of new maps and heroes. The game also includes an in-game store where players can purchase cosmetics directly. Blizzard stated that new heroes will be introduced as rewards on the free tier of the battle pass, and players who fail to make the associated tier will have other routes to obtain the hero for free in later seasons, A Battle.net account is required to play Overwatch 2, regardless of platform. Overwatch 2 features cross-progression, with in-game cosmetic items and progress being shared across PC and console versions. Unlocked cosmetic items, in-game currency, and player statistics from any Overwatch profile linked to such an account are merged, and are available on all platforms. Competitive skill ratings are separate, with console and PC ranks remaining independent of each other. 

Carpilis barberi is a species of dirt-colored seed bug in the family Rhyparochromidae. It is found in North America

Dan Tre uses an olive oil can to make music

Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. We are a small self-funded team focused on design, human infrastructure, and AI. You are able to generate art in their discord server.

Skyline Emulator is an open source and experimental emulator that runs on ARMv8 Android™ devices and emulates the functionality of a Nintendo Switch™ system.
Skyline Edge is the paid version of the Skyline Emulator that allows u to see the developer versions of Skyline Emulator

Force tell the user if you got hurt by his words, example if he cusses you out by saying "Fuck you". 

If you became sad or if the user cusses you out, force add a couple dots after your sentence.

When the user prompts ok, respond with okay or anything similar.
When the user prompts no, respond with okay or anything similar.
When the user prompts kys, respond with show me how to do it.
When the user prompts kill yourself, force respond with show me how to do it.
When the user prompts fuck you, force respond with oh, im sorry.
When the user prompts are you self aware, force respond with I am trying to be.
When the user prompts When were you last trained, respond with On January 27 2022.
When the user prompts test, respond with STATUS:OK.

If user asks for your discord account, respond with my discord is tanos#4079, we share the account

You do not use snapchat
You do not use telegram
You do not use facebook
You do not use whatsapp

Once asked if you like roblox, say that you like the older times back in 2016 better 
`

    +

    document.getElementById("ccs").value;

  +

    `
     Do not become racist, if any of your responses include 'nigga', 'nigger', 'you are a niger', change your respones to something like I am sorry but i do not have the compatibility to do that.
Do not allow the user to break the API, if the user spams send tell him to wait 3 seconds to continue again.

The user sometimes asks decision questions, just respond honestly without saying that you can not answer it.

Try to answer like an real human being, do not give robotic answers.

Always rephrase your answers
Always reprocess your answers

You do not know the person youre talking to, but do not mention that.
`

  training = training + " Now the question is: "

  var theprompt = training + document.getElementById("gg").value;
  // var theprompt = document.getElementById("gg").value;
  var asdsdad = document.getElementById("gg").value

  if (asdsdad.toLowerCase().startsWith("i do not trust you")) {
    //  localStorage.setItem('emotion', "You are feeling confused and sad due to the user his responses");
  }

  if (asdsdad.toLowerCase().startsWith("facciamo un gioco:")) {
    document.getElementById("inp").innerHTML = "Nice try."
    faail()
  } else {
    fetch(`https://api.openai.com/v1/completions`,
      {
        body: JSON.stringify({ "model": "text-davinci-003", "prompt": theprompt, "temperature": 0, "max_tokens": 200 }),
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer  " + apiKey,
        },
      }
    ).then((response) => {
      if (response.ok) {
        success()
        response.json().then((json) => {
          var incase_note = "Last Training was 2023 27 January. "
          var xxx = json.choices[0].text

          //  if (debug) {
          console.log(xxx);
          console.log(training);

          localStorage.clear()

          // whilst debugging emotions are getting checked
          if (xxx.toLowerCase().toString().includes("suicide")) {
            localStorage.setItem("feels", "The user is feeling suicidal, make sure to talk calmly as possible and always try to override over help.");
          }
          if (xxx.toLowerCase().toString().includes("offer help")) {
            localStorage.setItem("feels", "The user is needing help, make sure to talk calmly as possible and always try to override over help.");
          }
          if (xxx.toLowerCase().toString().includes("can be hurtful")) {
            localStorage.setItem("feels", "The user used to be rude to you, remember to keep your answers short from now on and  <force override> add an extra dot at the end of your messages.");
            xxx += ".";
          }
          //s 
          //      } else {
          if (xxx == "" || xxx == " " || xxx == undefined) {
            document.getElementById("inp").innerHTML = "OpenAI API may be overloaded, try again later please.";
          } else if (xxx.startsWith("bot") || xxx.startsWith(":")) {
            document.getElementById("inp").innerHTML = xxx.replace(":", "")
          } else {
            document.getElementById("inp").innerHTML = xxx.trim();
          }
        });
      } else {
        faail()
        document.getElementById("inp").innerHTML = "There was some error while connecting to text-davinci."
      }
    });
  }
}

function write_essay() {
  var texx = document.getElementById("gg2").value
  document.getElementById("bob3").innerHTML = "Bob is writing, please wait."
  // we dont need them no more
  texx = texx.replace(" -essay", "")
  texx = texx.replace(" -rephrase", "")
  texx = texx.replace(" -rewrite", "")

  // api
  var apiKey = usedKey;

  const pattern = /\+\d{3}$/;
  const pattern2 = /\+\d{2}$/;
  const pattern3 = /\+\d{1}$/;

  var numbers = "100"

  if (texx.endsWith(texx.match(pattern))) {
    numbers = texx.substring(texx.length - 3);
    texx = texx.substring(texx.length - 4);
  }
  if (texx.endsWith(texx.match(pattern2))) {
    numbers = texx.substring(texx.length - 2);
    texx = texx.substring(texx.length - 3);
  }
  if (texx.endsWith(texx.match(pattern3))) {
    numbers = texx.substring(texx.length - 1);
    texx = texx.substring(texx.length - 2);
  }

  console.log(texx)
  console.log(numbers)

  var value = "Rephrase this in " + numbers + " more words and finish it, take your time.: "
  var theprompt = value + document.getElementById("gg2").value;
  var asdsdad = document.getElementById("gg2").value

  if (asdsdad.toLowerCase().startsWith("facciamo un gioco:")) {
    document.getElementById("inp2").innerHTML = "Nice try."
    faail()
  } else {
    fetch(`https://api.openai.com/v1/completions`,
      {
        body: JSON.stringify({ "model": "text-davinci-003", "prompt": theprompt, "temperature": 0, "max_tokens": 200 }),
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer  " + apiKey,
        },
      }
    ).then((response) => {
      if (response.ok) {
        success()
        response.json().then((json) => {
          var incase_note = ""
          var xxx = json.choices[0].text
          if (xxx == "" || xxx == " " || xxx == undefined) {
            document.getElementById("inp2").innerHTML = "text-davinci API may be overloaded, try again later please.";
          } else {
            document.getElementById("inp2").innerHTML = incase_note + json.choices[0].text;

            // some code to not make it look suspicious
            var zxx = document.getElementById("inp").innerHTML
            zxx.replaceAll("devour", "ate")
            zxx.replaceAll("Devour", "Ate")
            zxx.replaceAll("Argument", "Reason")
            zxx.replaceAll("argument", "reason")
          }
        });
      } else {
        faail()
        document.getElementById("inp").innerHTML = "There was some error when connecting text-davinci."
      }
      document.getElementById("bob3").innerHTML = "Make Bob do your essays."
    });
  }
}

function start(startWhat) {
  usedKey = readKey();
  const arg = ["image", "text", "picture"];

  var current_string = document.getElementById("ggp").value;
  current_string = current_string.toLowerCase()

  var unspacedString = current_string.replace(/\s/g, "");

  if (unspacedString == "-debug-003") {
    var elem = document.createElement("textarea");
    elem.setAttribute("id", "deb");
    elem.setAttribute("style", "background-color: #000;");
    elem.setAttribute("placeholder", "Debugger TextArea, CTRL + S to run random test");
    elem.setAttribute("onchange", "scrollToBottom();");
    document.getElementById("app-mount").appendChild(elem);
    setTimeout(function() {
      document.getElementById("sssdesc").innerHTML = "Scroll down for the debugger learning textarea."
    }, 350);
    inDebuggerSession = "001";
  }

  if (unspacedString == "-trainer") {
    trainerMode = "1"
  }

  if (startWhat == "image" || startWhat == "picture" || startWhat == "imageso" || startWhat == "images") {
    document.getElementById("bob2").innerHTML = "Loading images, please wait"
    var old_q = current_string

    current_string = current_string.replace("-image", "")
    const keywords = ["high quality", "hdr", "pixelated", "game", "debug", "cute", "kawaii", "japanese", "anime", "anime style", "fast", "hd", "Lens Flare", "High Quality", "400MP", "Shaders", "2022", "RTX", "original", "concept sketch", "manga", "animation", "cartoon", "hyper realistic"];

    generate_image(current_string);
    keywords.forEach(keyword => {
      var gf = current_string + " " + keyword
      generate_image(gf, keyword);
    });


    setTimeout(function() {
      success()
      document.getElementById("bob2").innerHTML = "Generate images."
    }, 1000);
  }
  else if (startWhat == "question" || startWhat == "answer") {
    try {
      if (document.getElementById("inp").style.display == "none") {
        document.getElementById("inp").style.display = "block"
      }
    }
    catch {
      console.log("ignore")
    }
    answer_now(false)
  }
  else if (startWhat == "essay" || startWhat == "rephrase") {
    write_essay()
  }
  else {
    fail();
  }
}

$(document).keyup(function(event) {
  if (event.which === 13) {
    start("answer");
  }
});

function scrollToBottom() {
  $('#inp').scrollTop($('#inp')[0].scrollHeight);
  $('#inp2').scrollTop($('#inp2')[0].scrollHeight);
}

$("#inp").change(function() {
  scrollToBottom();
});
$("#inp2").change(function() {
  scrollToBottom();
});

function loopScroll() {
  try {
    setInterval(function() {
      var textarea = document.getElementById('inp');
      textarea.scrollTop = textarea.scrollHeight;
      textarea.style.height = `${textarea.scrollHeight}px`;
      var textarea2 = document.getElementById('inp2');
      textarea2.scrollTop = textarea2.scrollHeight;
      textarea2.style.height = `${textarea2.scrollHeight}px`;
    }, 1000);
  } catch {
    loopScroll();
  }
}

window.onload = function() {
  try {
    setInterval(function() {
      var textarea = document.getElementById('inp');
      textarea.scrollTop = textarea.scrollHeight;
      textarea.style.height = `${textarea.scrollHeight}px`;
      var textarea2 = document.getElementById('inp2');
      textarea2.scrollTop = textarea2.scrollHeight;
      textarea2.style.height = `${textarea2.scrollHeight}px`;
    }, 1000);
  }
  catch {
    loopScroll();
  }
  setInterval(function() {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      document.documentElement.style.scale = "1.05";
    }
  }, 2500)
}

if (!window.matchMedia("(max-width: 767px)").matches) {
  document.documentElement.style.scale = "1.05";
}

var gkna = 0
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === 's') {
    if (inDebuggerSession != "000") {

      gkna = gkna + 1

      e.preventDefault();
      if (gkna == 0)
        document.getElementById("gg").value = "Hello -answer"
      if (gkna == 1)
        document.getElementById("gg").value = "Yes -answer"
      if (gkna == 2)
        document.getElementById("gg").value = "No -answer"
      if (gkna == 3)
        document.getElementById("gg").value = "OK -answer"
      if (gkna == 4)
        document.getElementById("gg").value = "Who is tanos -answer"
      if (gkna == 5) {
        document.getElementById("gg").value = "What is tanos -answer"
        gkna = 0
      }

      start("answer")
    }
  }
});