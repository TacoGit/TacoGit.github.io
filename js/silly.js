function cook() {
    document.getElementById("updateableEpicness").innerText = "i wasted your time lol";
    document.getElementById("updateableEpicness").style.textTransform = "lowercase";
    document.getElementById("jsorono").innerText = "tanos is 16 now !!";
    document.getElementById("intro").innerHTML = `which meaanssss......<br> <a style="cursor:pointer" onclick="window.location='/fwee'">free robux, vbckusks and radiante</a> just for clicking there, just for today !!!!!!!<br>
                        <br>(new discord account remains <a>@tanossh.i</a>)`;
}

var countdownDate = new Date("February 7, 2025 00:01:00").getTime();
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById("underlinetextredirectionsforthemodernpage").innerText = "site will return to its original professional state in " + days + " days and " + hours + " hours";

}, 1000);