// not opensourced because of how ugly the backend is
var generated = false;

var impo = false;
var oratofun = false;
var ping = false;
var fs = false;
var emo = false;
var embed = false;
var ban = false;
var flipacoin = false;
var ascii = false;

var enabled = "✅";
var disabled = "❌";

var states = 0;

function reset_twemoji() {
  twemoji.parse(document.body,
    { folder: 'svg', ext: '.svg' } // This is to specify to Twemoji to use SVGs and not PNGs
  );
}

function add_or_remove(item) {
  //console.log(item == "import") ? console.log("ignore") : console.log("import")
  if (item == "tstatu") {
    states += 1
    if (states == 0)
      document.getElementById("tstatu").innerHTML = "Do Not Disturb";
    else if (states == 1)
      document.getElementById("tstatu").innerHTML = "Idle";
    else if (states == 2)
      document.getElementById("tstatu").innerHTML = "Online";
    else {
      states = 0;
      document.getElementById("tstatu").innerHTML = "Do Not Disturb";
    }
  }

  if (item == "import") {
    if (impo == false) {
      impo = true;
      document.getElementById("importstatus").innerHTML = enabled;
    }
    else {
      impo = false;
      document.getElementById("importstatus").innerHTML = disabled;
    }
  }
  if (item == "oratofun") {
    if (oratofun == false) {
      document.getElementById("onreadystatus").innerHTML = enabled;
      oratofun = true;
    }
    else {
      oratofun = false;
      document.getElementById("onreadystatus").innerHTML = disabled;
    }
  }
  if (item == "ping") {
    if (ping == false) {
      document.getElementById("pingstatus").innerHTML = enabled;
      ping = true;
    }
    else {
      ping = false;
      document.getElementById("pingstatus").innerHTML = disabled;
    }
  }
  if (item == "fs") {
    if (fs == false) {
      document.getElementById("fsstatus").innerHTML = enabled;
      fs = true;
    }
    else {
      fs = false;
      document.getElementById("fsstatus").innerHTML = disabled;
    }
  }
  if (item == "emo") {
    if (emo == false) {
      document.getElementById("emojistatus").innerHTML = enabled;
      emo = true;
    }
    else {
      emo = false;
      document.getElementById("emojistatus").innerHTML = disabled;
    }
  }
  if (item == "embed") {
    if (embed == false) {
      document.getElementById("embedstatus").innerHTML = enabled;
      embed = true;
    }
    else {
      embed = false;
      document.getElementById("embedstatus").innerHTML = disabled;
    }
  }
  if (item == "ban") {
    if (ban == false) {
      document.getElementById("banstatus").innerHTML = enabled;
      ban = true;
    }
    else {
      embed = false;
      document.getElementById("banstatus").innerHTML = disabled;
    }
  }
  if (item == "flipacoin") {
    if (flipacoin == false) {
      document.getElementById("flipstatus").innerHTML = enabled;
      flipacoin = true;
    }
    else {
      flipacoin = false;
      document.getElementById("flipstatus").innerHTML = disabled;
    }
  }
  if (item == "ascii") {
    if (ascii == false) {
      document.getElementById("asciistatus").innerHTML = enabled;
      ascii = true;
    }
    else {
      ascii = false;
      document.getElementById("asciistatus").innerHTML = disabled;
    }
  }
  reset_twemoji()
  console.log(item + oratofun + impo + ping + states)
}

function fix() {
  var errorboxname = document.getElementById("errorr")
  errorboxname.style.display = "none";
  errorboxname.parentNode.removeChild(errorboxname);
  add_or_remove("import")
  add_or_remove("oratofun")

  const elements1 = Array.from(
    document.getElementsByClassName('prism-code')
  );

  elements1.forEach(element => {
    element.parentNode.removeChild(element);
  });

  generated = false;

  generate()
}

async function generate() {
  if (generated)
    return false;
  generated = true

  $("#fade").animate({
    opacity: "1"
  }, 200);
  setTimeout(function() {
    $("#fade").animate({
      opacity: "0"
    }, 200);
    document.getElementById("genbut2").style.display = "none";
    document.getElementById("generator").style.display = "block";
    $("#buildmenu").animate({
      opacity: "0"
    }, 300);
    $("#generator").animate({
      opacity: "1"
    }, 300)
    $("#thelist").animate({
      opacity: "0"
    }, 300);
  }, 200);

  if (!impo || !oratofun) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      $('#generator').append('<div id="errorr" style="width: 300px;" class="my-8 flex rounded-3xl p-6 bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10"><svg aria-hidden="true" viewBox="0 0 32 32" fill="none" class="h-8 w-8 flex-none [--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]"><defs><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id=":R15pn6:-gradient" gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"><stop stop-color="#FDE68A" offset=".08"></stop><stop stop-color="#F59E0B" offset=".837"></stop></radialGradient><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id=":R15pn6:-gradient-dark" gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"><stop stop-color="#FDE68A" offset=".08"></stop><stop stop-color="#F59E0B" offset=".837"></stop></radialGradient></defs><g class="dark:hidden"><circle cx="20" cy="20" r="12" fill="url(#:R15pn6:-gradient)"></circle><path d="M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z" fill-opacity="0.5" class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z" class="fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill-opacity="0.5" stroke="currentColor" class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><g class="hidden dark:inline"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="url(#:R15pn6:-gradient-dark)"></path></g></svg><div class="ml-4 flex-auto"><p class="m-0 font-display text-xl text-amber-900 dark:text-amber-500">Oh no! Something bad may happen!</p><div class="prose mt-2.5 text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-slate-300"><p>The code thats about to be ran may get errored! <a onclick="fix()">Press here to try automatically fix it</a></p></div></div></div>');
    } else {
      $('#generator').append('<div id="errorr" class="my-8 flex rounded-3xl p-6 bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10"><svg aria-hidden="true" viewBox="0 0 32 32" fill="none" class="h-8 w-8 flex-none [--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]"><defs><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id=":R15pn6:-gradient" gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"><stop stop-color="#FDE68A" offset=".08"></stop><stop stop-color="#F59E0B" offset=".837"></stop></radialGradient><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id=":R15pn6:-gradient-dark" gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"><stop stop-color="#FDE68A" offset=".08"></stop><stop stop-color="#F59E0B" offset=".837"></stop></radialGradient></defs><g class="dark:hidden"><circle cx="20" cy="20" r="12" fill="url(#:R15pn6:-gradient)"></circle><path d="M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z" fill-opacity="0.5" class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z" class="fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill-opacity="0.5" stroke="currentColor" class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><g class="hidden dark:inline"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="url(#:R15pn6:-gradient-dark)"></path></g></svg><div class="ml-4 flex-auto"><p class="m-0 font-display text-xl text-amber-900 dark:text-amber-500">Oh no! Something bad may happen!</p><div class="prose mt-2.5 text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-slate-300"><p>The code thats about to be ran may get errored! <a onclick="fix()">Press here to try automatically fix it</a></p></div></div></div>');
    }

    generated = false
  }
  document.getElementById("textbuilding").innerHTML = "Building, please wait"
  document.getElementById("genbut").innerHTML = "Enjoy!"
  document.getElementById("genbut").disabled = true;
  var asd = ""
  if (emo) {
    asd = "discord-emoji-convert";
  }

  // Generate
  $('#generator').append(`<h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">Requirements</h1><pre class="prism-code language-shell"><code><span class="token function">npm</span><span class="token plain"> </span><span class="token function">install</span><span class="token plain"> discord.js@12.0.0</span><pre class="prism-code language-shell"><code><span class="token function">npm</span><span class="token plain"> </span><span class="token function">install</span><span class="token plain"> fs ms ${asd}</span></code></pre></code><h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">   </h1><h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">Code</h1>`);

  if (impo) {
    if (embed) {
      $('#generator').append('<pre class="prism-code language-shell"><code><span class="token plain">// Importing needs<br>const { Client, MessageEmbed } = require("discord.js");<br>const fs = require("fs");<br>const ms = require("ms");<br></span>');
    } else {
      $('#generator').append('<pre class="prism-code language-shell"><code><span class="token plain">// Importing needs<br>const Discord = require("discord.js");<br>const fs = require("fs");<br>const ms = require("ms");<br></span>');
    }
    if (emo) {
      $('#generator').append('<pre class="prism-code language-shell"><code><span class="token plain">const emoji = require("discord-emoji-convert");</span></code></pre>');
    }
    $('#generator').append('<pre class="prism-code language-shell"><code><span class="token plain"><br>// Initialize Discord<br>const client = new Discord.Client();<br></span></code></pre></code><h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white"></span></code></pre>');
  }

  if (fs) {
    $('#generator').append("<pre class=\"prism-code language-shell\"><code><span class=\"token plain\"><br>// Load javascript commands in the commands directory (if there is)<br>fs.readdir(\"./commands/\", (err, files) => {<br>  if (err) console.log(err);<br>  let jsfile = files.filter((f) => f.split(\".\").pop() === \"js\");<br>  if (jsfile.length <= 0) {<br>    console.log(\"Could not find commands.\");<br>    return;<br>  }<br><br>  jsfile.forEach((f, i) => {<br    let props = require(`./commands/${f}`);<br>    console.log(`${f} loaded!`);<br>    bot.commands.set(props.help.name, props);<br>    props.help.aliases.forEach((alias) => {<br>      client.aliases.set(alias, props.help.name);<br>    });<br>  });<br>});</span></code></pre>");
  }

  if (oratofun) {
    if (fs) {
      $('#generator').append("<pre class=\"prism-code language-shell\"><code><span class=\"token plain\"><br>// Once successfully logged in<br>client.on('ready', () => {<br>  client.user.setStatus(\"" + document.getElementById("tstatu").innerHTML + "\");<br>  console.log(`Logged in as ${client.user.tag}!`);<br>  client.on(\"message\", async (message) => {<br>       let args = message.content.split(/ +/g); // if this line errors let me know<br>       let cmd = args.shift().toLowerCase();<br>       let commandfile;<br>       if (client.commands.has(cmd)) {<br>         commandfile = client.commands.get(cmd);<br>       } else if (client.aliases.has(cmd)) {<br>         commandfile = client.commands.get(client.aliases.get(cmd));<br>       } <br>       if (!message.content.startsWith(prefix)) return;<br>       try {<br>         commandfile.run(client, message, args);<br>       } catch (e) {}  <br>  });<br>});</span></code></pre>");
    } else {
    $('#generator').append("<pre class=\"prism-code language-shell\"><code><span class=\"token plain\"><br>// Once successfully logged in<br>client.on('ready', () => {<br>  client.user.setStatus(\"" + document.getElementById("tstatu").innerHTML + "\");<br>  console.log(`Logged in as ${client.user.tag}!`);<br>});</span></code></pre>");
    }
  }

  if (ping) {
    $('#generator').append("<pre class=\"prism-code language-shell\"><code><span class=\"token plain\"><br>// If a user sent the message 'ping'<br>client.on('message', msg () => {<br>  if (msg.content === 'ping') {<br>    msg.reply('pong');<br>  }<br>});<br></span></code></pre>");
  }

  if (embed) {
    $('#generator').append("<pre class=\"prism-code language-shell\"><code><span class=\"token plain\"><br>// Create an embed once a person says 'embed'<br>client.on('message', msg () => {<br>  if (msg.content === 'embed') {<br>     const embed = new MessageEmbed()<br>      // Set the title of the field<br>      .setTitle('Embed Title')<br>      // Set the color of the embed (any: hex, rgb, etc)<br>      .setColor(0xff0000)<br>      // Set the main content of the embed<br>      .setDescription('Embed Description');<br>    // Send the embed to the same channel as the message<br>    message.channel.send(embed);<br>  }<br>});<br></span></code></pre>");
  }

  if (emo) {
    $('#generator').append("<pre class=\"prism-code language-shell\"><code><span class=\"token plain\"><br>client.on(\"message\", (message) => {<br>  if (message.author.client) return;<br>  if (message.channel.type === \"dm\") return;<br>  if (message.content.startsWith(`emojify`)) {<br>    var arg = message.content.split(\" \").slice(1).join(\" \");<br>    if (!arg)<br>      return message.channel.send(\"What do you want me to emojify? | Example Usage: emojify this is cool\");<br>    if (arg.legth > 90)<br>      return message.channel.send(\"Your text is too long | Please keep it under 90 characters\");<br>    let emojis = emoji.convert(arg);<br>    message.channel.send(emojis).catch((_err) => {<br>        message.channel.send(arg);<br>    });<br>   }<br>});<br></span></code></pre>");
  }

  if (oratofun) {
    $('#generator').append("<pre class=\"prism-code language-shell\"><code><span class=\"token plain\"><br>// Replace token with your bot's token<br>client.login('token');</span></code></pre>");
  }

  if ((flipacoin || ascii || ban) && fs)
    $('#generator').append(`<br><br><h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">The commands folder</h1</code></pre></code><h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">`);

  if (fs) {
    if (flipacoin) {
      $('#generator').append(`<p class="font-display text-sm font-medium text-sky-500">flip.js</p><pre class=\"prism-code language-shell\"><code><span class=\"token plain\">sd</span></code></pre>`);
    }
    if (ascii) {
      $('#generator').append("<p class=\"font-display text-sm font-medium text-sky-500\">ascii.js</p><pre class=\"prism-code language-shell\"><code><span class=\"token plain\">// Import Needs<br>const Discord = require(\"discord.js\");<br>const figlet = require(\"figlet\");<br> <br>module.exports.run = async (bot, message, args) => {<br>   const moretext = new Discord.MessageEmbed() // Create an embed<br>     .setTitle(<br>      `<:redtick:784476092819701820> Error <:redtick:784476092819701820>`<br>      )<br>     .setColor(`RED`)<br>     .setDescription(`Please provide some text`);<br> // If user did not specify any text it will error and send the embed<br><br>   if (!args[0]) return message.channel.send(moretext);<br> <br>   msg = args.join(\" \");<br> <br>   const shorterPLS = new Discord.MessageEmbed()  // Create an embed<br>      .setTitle(<br>      `<:redtick:784476092819701820> Error <:redtick:784476092819701820>`<br>      )<br>      .setColor(`RED`)<br>      .setDescription(`Please provide text shorter than 2000 characters`);<br> <br>   const whatthehell = new Discord.MessageEmbed()  // Create an embed<br>          .setTitle(<br>      `<:redtick:784476092819701820> Error <:redtick:784476092819701820>`<br>      )<br>     .setColor(`RED`)<br>     .setDescription(<br>      `Something just happened that i couldnt solve, please try again`<br>      );<br> <br>  // Create and send the ascii text <br>   figlet.text(msg, function (err, data) {<br>     if (err) {<br>         message.channel.send(whatthehell);<br>     }<br>     if (data.length > 2000) return message.channel.send(shorterPLS);<br> <br>     message.channel.send(\"```\" + data + \"```\");<br>     });<br> };<br> <br>module.exports.help = {<br>   name: \"ascii\",<br>   aliases: [\"asci\"],<br>};<br></span></code></pre>");
    }
  }
  document.getElementById("textbuilding").innerHTML = "Building complete"
}

function test(asd) {
  console.log("browser may crash while ran")
  $(asd).append("<div class=\"group relative rounded-xl border border-slate-200 dark:border-slate-800\"><br><div                  class=\"absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]\"><br></div><br><div onclick=\"add_or_remove('import')\" class=\"relative overflow-hidden rounded-xl p-6\"><br><svg aria-hidden=\"true\" viewBox=\"0 0 32 32\" fill=\"none\" class=\"h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]\"><br><defs><br><radialGradient cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" id=\":R1i19n6:-gradient\"gradientTransform=\"matrix(0 21 -21 0 20 3)\"><br><stop stop-color=\"#0EA5E9\"><br></stop><br><stop stop-color=\"#22D3EE\" offset=\".527\"><br></stop><br><stop stop-color=\"#818CF8\" offset=\"1\"><br></stop><br></radialGradient><br><radialGradient cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" id=\":R1i19n6:-gradient-dark\"gradientTransform=\"matrix(0 22.75 -22.75 0 16 6.25)\"><br> <stop stop-color=\"#0EA5E9\"><br></stop><br> <stop stop-color=\"#22D3EE\" offset=\".527\"><br></stop><br> <stop stop-color=\"#818CF8\" offset=\"1\"><br></stop><br> </radialGradient><br> </defs><br> <g class=\"dark:hidden\"><br> <circle cx=\"20\" cy=\"12\" r=\"12\" fill=\"url(#:R1i19n6:-gradient)\"><br></circle><br> <g class=\"fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]\" fill-opacity=\"0.5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><br> <path d=\"M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z\"><br></path><br> <path d=\"M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z\"><br> </path><br> <path d=\"M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z\"><br> </path><br> <path d=\"M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z\"><br> </path><br> </g><br> </g><br> <g class=\"hidden dark:inline\" fill=\"url(#:R1i19n6:-gradient-dark)\"><br> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z\"><br> </path><br> <path d=\"M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z\"><br> </path><br> </g><br>                  </svg><br>                  <h2 class=\"mt-4 font-display text-base text-slate-900 dark:text-white\"><br><a><br><span class=\"absolute -inset-px rounded-xl\"><br></span><br>Import Needs</a><br></h2><br>                  <p class=\"mt-1 text-sm text-slate-700 dark:text-slate-400\"><br>This will allow the code to interact with Discord as example</p><br>                  <h3 class=\"statt\" id=\"importstatus\"><br>disabled</h3><br>                </div><br>              </div><br>");
}