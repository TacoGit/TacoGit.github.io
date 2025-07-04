/// 🌸 PC Optimizer by @tanosshi :) ///

// Fix Code Metrics from crying
/** global: Blob */
// global: Blob
///////////////////////////////

var ram = "LOW";
var defender = "UNINSTALL";
var bloatware_apps = "KEEP";
var onedrive = "UNINSTALL";
var shutup = "RUN";
var graphicalcard = "Iris";
var srv = "YES";
var win = "11";
var add = "YES";

function fpsa() {
  var contentsfps = document.getElementById("contentsfps");
  var elementsToLoad = document.createRange()
    .createContextualFragment(`<h3 id="tanosprojects">tanos - project fps fixer (browser ver.).</h3>

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
  $("#home").animate(
    {
      opacity: "0",
    },
    500
  );
  setTimeout(function () {
    document.getElementById("home").style.display = "none";
  }, 500);
  $("#projects").animate(
    {
      opacity: "0",
    },
    500
  );
  setTimeout(function () {
    document.getElementById("projects").style.display = "none";
  }, 500);
  $("#fps").animate(
    {
      opacity: "1",
    },
    500
  );
  setTimeout(function () {
    document.getElementById("fps").style.display = "block";
  }, 500);
}

function q_understood() {
  $("#understandment").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("understandment").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "About how much RAM do you have?";
    document.getElementById("fpstxt").textContent =
      "Above 8GB is always optimal for gaming.";
    $("#ram").animate({ opacity: "1" }, 250);
    document.getElementById("ram").style.display = "block";
  }, 250);
}

function q_download(what) {
  if (what == "script") {
    var text = document
      .getElementById("teext")
      .innerHTML.replace(/<br>/g, "\n");
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "optimizer.bat");
  } else if (what == "defender") {
    window.open("https://tanos.is-a.dev/files/disable-defender.exe");
  } else if (what == "nvcleanstall") {
    window.open(
      "https://www.techpowerup.com/download/techpowerup-nvcleanstall/"
    );
  } else if (what == "iris") {
    window.open(
      "https://www.dell.com/support/home/drivers/driversdetails?driverid=92f15"
    );
  } else if (what == "kms") {
    window.open("https://tanos.is-a.dev/files/KMS_VL_ALL_AIO.cmd");
  } else if (what == "gpedit") {
    window.open("https://tanos.is-a.dev/files/gpedit.bat");
  }
}

function q_ram(set) {
  ram = set;
  $("#ram").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("ram").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "Would you like to uninstall Windows Defender?";
    document.getElementById("fpstxt").textContent =
      "Windows Defender usually has 300MB usage on idle, best to uninstall it.";
    $("#defender").animate({ opacity: "1" }, 250);
    document.getElementById("defender").style.display = "block";
  }, 250);
}

function q_defender(set) {
  defender = set;
  $("#defender").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("defender").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "Would you like to uninstall Windows Bloatware Apps?";
    document.getElementById("fpstxt").textContent =
      "This includes apps like Feedback Hub, Camera, Calender, Maps, Get Help, etc.";
    $("#bapps").animate({ opacity: "1" }, 250);
    document.getElementById("bapps").style.display = "block";
  }, 250);
}

function q_bapps(set) {
  bloatware_apps = set;
  $("#bapps").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("bapps").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "Uninstall OneDrive and Disable Telemetry?";
    document.getElementById("fpstxt").textContent =
      "Removing and Disablign Telemetry can help optimize your PC lightly.";
    $("#odantl").animate({ opacity: "1" }, 250);
    document.getElementById("odantl").style.display = "block";
  }, 250);
}

function q_onetel(set) {
  onedrive = set;
  $("#odantl").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("odantl").style.display = "none";
    document.getElementById("fpsquest").textContent = "Run O&O ShutUp10?";
    document.getElementById("fpstxt").textContent =
      "This will disable ads, telemetry and fix privacy parameters";
    $("#shutup").animate({ opacity: "1" }, 250);
    document.getElementById("shutup").style.display = "block";
  }, 250);
}

function q_shutup(set) {
  shutup = set;
  $("#shutup").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("shutup").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "Press your graphics card if its listed";
    document.getElementById("fpstxt").textContent =
      "Press 'other' if you do not want to install recommended drivers.";
    $("#grpc").animate({ opacity: "1" }, 250);
    document.getElementById("grpc").style.display = "block";
  }, 250);
}

function q_graphicalcard(set) {
  graphicalcard = set;
  graphicalcard = graphicalcard;
  $("#grpc").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("grpc").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "Cleanup Browser, Registry and Services?";
    document.getElementById("fpstxt").textContent =
      "Handy to turn off browser acceleration and unneeded services.";
    $("#srvc").animate({ opacity: "1" }, 250);
    document.getElementById("srvc").style.display = "block";
  }, 250);
}

function q_srv(set) {
  srv = set;
  $("#srvc").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("srvc").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "What Windows Version are you on?";
    document.getElementById("fpstxt").textContent =
      "This will be used to savely run scripts";
    $("#wind").animate({ opacity: "1" }, 250);
    document.getElementById("wind").style.display = "block";
  }, 250);
}

function q_win(set) {
  add = set;
  $("#wind").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("wind").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "Run some additional commands?";
    document.getElementById("fpstxt").textContent =
      "These commands are undescribable but will significally improve FPS, they will be listed in the BAT file.";
    $("#add").animate({ opacity: "1" }, 250);
    document.getElementById("add").style.display = "block";
  }, 250);
}

function q_add(set) {
  add = set;
  live_create();
  $("#add").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    document.getElementById("add").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "Your answers are being processed";
    document.getElementById("fpstxt").innerHTML =
      "Please wait while the BAT files are being made, press <a style='cursor:pointer;' onclick='document.getElementById(\"teext\").style.display=\"block\"'>here</a> to see it being built (might be buggy).";
  }, 250);
}

function live_create() {
  document.getElementById("teext").innerHTML = "";

  // pain to look at damn
  setTimeout(function () {
    var steps = [
      "@echo off",
      "title tanos.is-a.dev fps project",
      "echo Tool by @tanosshi, config by you :)",
      "echo Want to make another config? Come here, https://tanos.is-a.dev/",
      "echo.",
      ":main",
      "echo RAM set to [" + (ram == "LOW" ? "LOW" : "HIGH") + "]",
      defender == "UNINSTALL"
        ? "echo [Uninstalling] Windows Defender"
        : "echo [Keeping] Windows Defender",
      bloatware_apps == "UNINSTALL"
        ? "echo [Uninstalling] Bloatware Apps"
        : "echo [Keeping] Bloatware Apps",
      onedrive == "UNINSTALL"
        ? "echo [Uninstalling] OneDrive and Removing Telemetry"
        : "echo [Keeping] OneDrive and Removing Telemetry",
      shutup == "RUN"
        ? "echo Running ShutUp10"
        : "echo Skipping ShutUp10 steps",
      graphicalcard == "Iris" || graphicalcard == "IRIS"
        ? "echo (i)GPU set as [Intel Iris XE]"
        : graphicalcard == "NVIDIA"
        ? "echo graphicalcard set for [NVIDIA]"
        : "echo Unknown graphicalcard, [skipping]",
      srv == "YES"
        ? "echo [Cleaning] Browser and Services"
        : "echo [Skipping] Service Cleanup",
      win == "10"
        ? "echo Script set for [Windows 10]"
        : "echo Script set for [Windows 11]",
      add == "YES"
        ? "echo [Will] run additional scripts"
        : "echo [Will not] run additional scripts",
      "echo.",
      "echo run at your own risk, i will not cover any damages made to your device",
      "echo this tool is made for educational purposes only!!",
      "echo.",
      "echo 3. Make sure the tool is ran as administrator.",
      "echo 2. Make sure the tool is ran as administrator.",
      "echo 1. Make sure the tool is ran as administrator.",
      "echo Press any key if you agree with the configuration, and do not touch keyboard and mouse during process.",
      "echo.",
      "pause",
      "echo Please do not interrupt the tool.",
      defender == "UNINSTALL"
        ? "echo [+] Killing Windows Defender processes"
        : "echo [*] Keeping Windows Defender safe",
      defender == "UNINSTALL" ? "taskkill /f /im smartscreen.exe" : ";",
      defender == "UNINSTALL"
        ? "taskkill /f /im SecurityHealthSystray.exe"
        : ";",
      defender == "UNINSTALL" ? "taskkill /f /im SecurityHealthHost.exe" : ";",
      defender == "UNINSTALL"
        ? "taskkill /f /im SecurityHealthService.exe"
        : ";",
      defender == "UNINSTALL" ? "taskkill /f /im SecurityHealthHost.exe" : ";",
      defender == "UNINSTALL" ? "taskkill /f /im DWWIN.EXE" : ";",
      defender == "UNINSTALL" ? "taskkill /f /im CompatTelRunner.exe" : ";",
      defender == "UNINSTALL"
        ? "taskkill /f /im GameBarPresenceWriter.exe"
        : ";",
      defender == "UNINSTALL" ? "taskkill /f /im DeviceCensus.exe" : ";",
      defender == "UNINSTALL" ? "bcdedit /set hypervisorlaunchtype off" : ";",
      defender == "UNINSTALL"
        ? "echo [+] Attempting to uninstall Windows Defender"
        : ";",
      defender == "UNINSTALL"
        ? 'PowerShell -NoProfile -ExecutionPolicy Bypass -Command "& {Start-Process PowerShell -ArgumentList -NoProfile -ExecutionPolicy Bypass -File ""RemoveSecHealthApp.ps1""\' -Verb RunAs}"'
        : ";",
      defender == "UNINSTALL" ? "echo [-] Unregistering Windows Defender" : ";",
      defender == "UNINSTALL"
        ? 'FOR /R %%f IN (Remove_defender*.reg) DO regedit.exe /s "%%f"'
        : ";",
      defender == "UNINSTALL"
        ? 'FOR /R %%f IN (Remove_SecurityComp*.reg) DO regedit.exe /s "%%f"'
        : ";",
      defender == "UNINSTALL"
        ? "echo [+] Attempting to remove Windows Defender files"
        : ";",
      defender == "UNINSTALL"
        ? 'for %%d in ("C:\\Windows\\WinSxS\\FileMapswow64_windows-defender*.manifest" "C:\\Windows\\WinSxS\\FileMaps\x86_windows-defender*.manifest" "C:\\Windows\\WinSxS\\FileMaps\\amd64_windows-defender*.manifest" "C:\\Windows\\System32\\SecurityAndMaintenance_Error.png" "C:\\Windows\\System32\\SecurityAndMaintenance.png" "C:\\Windows\\System32\\SecurityHealthSystray.exe" "C:\\Windows\\System32\\SecurityHealthService.exe" "C:\\Windows\\System32\\SecurityHealthHost.exe" "C:\\Windows\\System32\\driversSgrmAgent.sys" "C:\\Windows\\System32\\driversWdDevFlt.sys" "C:\\Windows\\System32\\driversWdBoot.sys" "C:\\Windows\\System32\\driversWdFilter.sys" "C:\\Windows\\System32\\wscsvc.dll" "C:\\Windows\\System32\\driversWdNisDrv.sys" "C:\\Windows\\System32\\wscsvc.dll" "C:\\Windows\\System32\\wscproxystub.dll" "C:\\Windows\\System32\\wscisvif.dll" "C:\\Windows\\System32\\SecurityHealthProxyStub.dll" "C:\\Windows\\System32\\smartscreen.dll" "C:\\Windows\\SysWOW64\\smartscreen.dll" "C:\\Windows\\System32\\smartscreen.exe" "C:\\Windows\\SysWOW64\\smartscreen.exe" "C:\\Windows\\System32\\DWWIN.EXE" "C:\\Windows\\SysWOW64\\smartscreenps.dll" "C:\\Windows\\System32\\smartscreenps.dll" "C:\\Windows\\System32\\SecurityHealthCore.dll" "C:\\Windows\\System32\\SecurityHealthSsoUdk.dll" "C:\\Windows\\System32\\SecurityHealthUdk.dll" "C:\\Windows\\System32\\SecurityHealthAgent.dll" "C:\\Windows\\System32\\wscapi.dll" "C:\\Windows\\System32\\wscadminui.exe" "C:\\Windows\\SysWOW64\\GameBarPresenceWriter.exe" "C:\\Windows\\System32\\GameBarPresenceWriter.exe" "C:\\Windows\\SysWOW64\\DeviceCensus.exe" "C:\\Windows\\SysWOW64\\CompatTelRunner.exe" "C:\\Windows\\System32\\driversmsseccore.sys" "C:\\Windows\\System32\\driversMsSecFltWfp.sys" "C:\\Windows\\System32\\driversMsSecFlt.sys") DO PowerRun cmd.exe /c del /f "%%d"'
        : ";",
      defender == "UNINSTALL"
        ? 'for %%d in ("C:\\Windows\\WinSxS\\amd64_security-octagon*" "C:\\Windows\\WinSxS\\x86_windows-defender*" "C:\\Windows\\WinSxS\\wow64_windows-defender*" "C:\\Windows\\WinSxS\\amd64_windows-defender*" "C:\\WindowsSystemAppsMicrosoft.Windows.AppRep.ChxApp_cw5n1h2txyewy" "C:ProgramDataMicrosoft\\Windows Defender" "C:ProgramDataMicrosoft\\Windows Defender Advanced Threat Protection" "C:Program Files (x86)\\Windows Defender Advanced Threat Protection" "C:Program Files\\Windows Defender Advanced Threat Protection" "C:ProgramDataMicrosoft\\Windows Security Health" "C:ProgramDataMicrosoftStorage Health" "C:\\WinDOWS\\System32\\driverswd" "C:Program Files (x86)\\Windows Defender" "C:Program Files\\Windows Defender" "C:\\Windows\\System32\\SecurityHealth" "C:\\Windows\\System32\\WebThreatDefSvc" "C:\\Windows\\System32\\Sgrm" "C:\\WindowsContainers\\WindowsDefenderApplicationGuard.wim" "C:\\Windows\\SysWOW64\\WindowsPowerShell\v1.0ModulesDefenderPerformance" "C:\\Windows\\System32\\WindowsPowerShell\v1.0ModulesDefenderPerformance" "C:\\Windows\\System32\\WindowsPowerShell\v1.0ModulesDefender" "C:\\Windows\\System32\\Tasks_MigratedMicrosoft\\Windows\\Windows Defender" "C:\\Windows\\System32\\TasksMicrosoft\\Windows\\Windows Defender" "C:\\Windows\\SysWOW64\\WindowsPowerShell\v1.0ModulesDefender" "C:\\Windows\\System32\\HealthAttestationClient" "C:\\WindowsGameBarPresenceWriter" "C:\\Windows\bcastdvr" "C:\\WindowsContainersserviced\\WindowsDefenderApplicationGuard.wim") do PowerRun cmd.exe /c rmdir "%%~d" /s /q'
        : ";",
      defender == "UNINSTALL"
        ? "echo [+] Third party way removing Windows Defender"
        : ";",
      defender == "UNINSTALL" ? "echo [!] Failed, do not panic" : ";",
      defender == "UNINSTALL" ? "echo [5] Modifiying registry" : ";",
      defender == "UNINSTALL"
        ? 'REG ADD "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer" /v SmartScreenEnabled /t REG_SZ /d Off /f'
        : ";",
      defender == "UNINSTALL"
        ? 'REG ADD "HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Explorer" /v SmartScreenEnabled /t REG_SZ /d Off /f'
        : ";",
      defender == "UNINSTALL"
        ? 'REG ADD "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\AppHost" /v EnableWebContentEvaluation /t REG_DWORD /d 0 /f'
        : ";",
      defender == "UNINSTALL"
        ? 'REG ADD "HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\AppHost" /v EnableWebContentEvaluation /t REG_DWORD /d 0 /f'
        : ";",
      defender == "UNINSTALL"
        ? 'REG ADD "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v EnableSmartScreen /t REG_DWORD /d 0 /f'
        : ";",
      "echo.",
      "echo  [@] Exhaust [Do not panic if look stuck]",
      bloatware_apps == "KEEP"
        ? "echo [+] Keeping bloated applications."
        : "echo [+] Removing bloated applications.",
      bloatware_apps == "KEEP" ? ";" : "echo [4] Removing apps with powershell",
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.3dbuilder* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *AdobeSystemsIncorporated.AdobePhotoshopExpress* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.WindowsAlarms* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.Asphalt8Airborne* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *microsoft.windowscommunicationsapps* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *king.com.CandyCrushSodaSaga* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.DrawboardPDF* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Facebook* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *BethesdaSoftworks.FalloutShelter* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.WindowsFeedbackHub* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.GetHelp* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.Getstarted* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.ZuneMusic* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.WindowsMaps* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.Messaging* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.Wallet* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.MicrosoftSolitaireCollection* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Todos* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *ConnectivityStore* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *MinecraftUWP* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.OneConnect* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.ZuneVideo* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.BingNews* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.BingFinance* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.MicrosoftOfficeHub* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Netflix* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *OneNote* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.MSPaint* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *PandoraMediaInc* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *CommsPhone* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.People* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.Print3D* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *windowsphone* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.Print3D* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *flaregamesGmbH.RoyalRevolt2* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *WindowsScan* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *AutodeskSketchBook* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.SkypeApp* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *bingsports* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Office.Sway* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.Getstarted* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft3DViewer* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Twitter* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.BingWeather* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.XboxApp* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *XboxOneSmartGlass* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.XboxSpeechToTextOverlay* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.XboxIdentityProvider* | Remove-AppxPackage"',
      bloatware_apps == "KEEP"
        ? ";"
        : 'powershell -Command "Get-AppxPackage *Microsoft.XboxGameOverlay* | Remove-AppxPackage"',
      "echo.",
      "echo  [@] Exhaust [Do not panic if look stuck]",
      onedrive == "UNINSTALL"
        ? "echo [+] Uninstalling OneDrive and Telemetry (this might take a while)"
        : "echo [+] Keeping OneDrive and Telemetry",
      onedrive == "UNINSTALL"
        ? 'powershell -Command "irm asheroto.com/uninstallonedrive | iex"'
        : ";",
      "echo.",
      "echo  [@] Exhaust [Do not panic if look stuck]",
      shutup == "RUN"
        ? "echo [+] Running ShutUp10 script"
        : "echo [!] Not running ShutUp10.",
      shutup == "RUN"
        ? 'powershell -Command "Invoke-WebRequest https://dl5.oo-software.com/files/ooshutup10/OOSU10.exe -OutFile ooshutup10.exe"'
        : ";",
      shutup == "RUN"
        ? 'powershell -Command "Invoke-WebRequest https://tanos.is-a.dev/files/ooshutup10.cfg -OutFile ooshutup10.cfg"'
        : ";",
      shutup == "RUN" ? "ooshutup10.exe ooshutup10.cfg" : ";",
      "echo.",
      "echo [@] Exhaust [Setting up virtual memory]",
      ram == "LOW"
        ? "echo [3] Setting virtual memory"
        : "echo [3] Setting virtual memory",
      ram == "LOW"
        ? 'wmic pagefileset where name="C:\\\\pagefile.sys" set InitialSize=2048,MaximumSize=4096'
        : 'wmic pagefileset where name="C:\\\\pagefile.sys" set InitialSize=16500,MaximumSize=16500',
      "echo.",
      "echo  [@] Exhaust [Do not panic if look stuck]",
      srv == "YES"
        ? "echo [+] Turning off unneeded services"
        : "echo [!] Services are not closing.",
      srv == "YES" ? "echo [2] Fixing registry" : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\DPS" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\WdiServiceHost" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\WdiSystemHost" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Spooler" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\PrintNotify" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Themes" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? "@powershell wmic path softwarelicensingservice get OA3xOriginalProductKey"
        : ";",
      srv == "YES" ? "echo [2] Fixing registry" : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\TabletInputService" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\stisvc" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\WSearch" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\WpnService" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\LanmanWorkstation" /v "Start" /t REG_DWORD /d 4 /f'
        : ";",
      srv == "YES"
        ? 'reg ADD "HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v EnableActivityFeed /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'reg ADD "HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v PublishUserActivities /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'reg ADD "HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v UploadUserActivities  /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects" /v VisualFXSetting /t REG_DWORD /d 2 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\AnimateMinMax" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\ComboBoxAnimation" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\ControlAnimations" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\CursorShadow" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\DragFullWindows" /v DefaultApplied /t REG_DWORD /d 1 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\DropShadow" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\DWMAeroPeekEnabled" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\DWMEnabled" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\DWMSaveThumbnailEnabled" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\FontSmoothing" /v DefaultApplied /t REG_DWORD /d 1 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\ListBoxSmoothScrolling" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\ListviewAlphaSelect" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\ListviewShadow" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\MenuAnimation" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\SelectionFade" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\TaskbarAnimations" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\Themes" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\ThumbnailsOrIcon" /v DefaultApplied /t REG_DWORD /d 1 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\TooltipAnimation" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\\TransparentGlass" /v DefaultApplied /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl /v Win32PrioritySeparation" /t REG_DWORD /d 38 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v GPU Priority /t REG_DWORD /d 8 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v Priority /t REG_DWORD /d 6 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SOFTWARE\\Microsoft\\PolicyManager\\default\\ApplicationManagement\\AllowGameDVR" /v value /t REG_SZ /d 0 /f'
        : ";",
      srv == "YES" ? "echo." : ";",
      srv == "YES" ? "echo [2] Setting up BCD" : ";",
      srv == "YES" ? "bcdedit -set TESTSIGNING OFF" : ";",
      srv == "YES" ? "bcdedit -set hypervisorlaunchtype off" : ";",
      srv == "YES" ? "bcdedit -set TESTSIGNING OFF" : ";",
      srv == "YES" ? "echo." : ";",
      srv == "YES" ? "echo [2] Fixing registry" : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v HideFileExt /t  REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v BingSearchEnabled /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v CortanaEnabled /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v SearchboxTaskbarMode /t REG_DWORD /d 1 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v AllowCloudSearch /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v ConnectedSearchUseWeb /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\Software\\Policies\\Microsoft\\Windows\\Windows Search" /v ConnectedSearchUseWebOverMeteredConnections /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v DisableWebSearch /t REG_DWORD /d 1 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v AllowCortanaAboveLock /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\services\\TermServicentVersion\\Search" /v AllowCortana /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v AllowCortana /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'REG ADD "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v AllowSearchToUseLocation /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES" ? "echo [2] Fixing services.msc" : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name WSearch -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name wuauserv -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name spooler -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name WinDefend -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name RemoteRegistry -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name w32time -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name SysMain -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name wermgr -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name DPS -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name Themes -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "@powershell Set-Service -Name Parsec -StartupType Disabled"
        : ";",
      srv == "YES"
        ? "echo [2] Disabling hardware acceleration on browsers"
        : ";",
      srv == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Edge" /v "HardwareAccelerationModeEnabled" /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Google\\Chrome" /v "HardwareAccelerationModeEnabled" /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Opera" /v "HardwareAccelerationModeEnabled" /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'reg add "HKEY_CURRENT_USER\\Software\\Valve\\Steam" /v "GPUAccelWebViewsV3" /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'reg add "HKEY_CURRENT_USER\\Software\\Valve\\Steam" /v "H264HWAccel" /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'reg add "HKEY_CURRENT_USER\\Software\\Valve\\Steam" /v "SmoothScrollWebViews" /t REG_DWORD /d 0 /f'
        : ";",
      srv == "YES"
        ? 'reg add "HKEY_CURRENT_USER\\Software\\Valve\\Steam" /v "DPIScaling" /t REG_DWORD /d 0 /f'
        : ";",
      "echo.",
      "echo  [@] Exhaust [Do not panic if look stuck]",
      win == "10"
        ? "echo [+] No windows 10 setup needed"
        : "echo [-] Disabling Windows 11 Copilot",
      win == "10" ? ";" : "echo [1] Fixing registry",
      win == "10"
        ? ";"
        : "reg add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced /v ShowCopilotButton /t REG_DWORD /d 0 /f",
      add == "YES"
        ? "echo [+] Additional commands are gonna be ran, please wait for about 15 seconds"
        : ";",
      add == "YES" ? "echo [0] Fix registry" : ";",
      add == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v Win32PrioritySeparation /t REG_DWORD /d 38 /f'
        : ";",
      add == "YES" ? "echo [0] Fix mitigation" : ";",
      add == "YES"
        ? 'for %%a in (EnhancedPowerManagementEnabled AllowIdleIrpInD3 EnableSelectiveSuspend DeviceSelectiveSuspended SelectiveSuspendEnabled SelectiveSuspendOn EnumerationRetryCount ExtPropDescSemaphore WaitWakeEnabled D3ColdSupported WdfDirectedPowerTransitionEnable EnableIdlePowerManagement IdleInWorkingState) do for /f "delims=" %%b in (\'reg query "HKLMSYSTEMCurrentControlSetEnum" /s /f "%%a" ^| findstr "HKEY"\') do reg.exe add "%%b" /v "%%a" /t REG_DWORD /d "0" /f'
        : ";",
      add == "YES"
        ? 'for %%i in ("Application Experience\\Microsoft Compatibility Appraiser" "Application Experience\\ProgramDataUpdater" "Application Experience\\StartupAppTask" "Customer Experience Improvement Program\\Consolidator" "Customer Experience Improvement Program\\KernelCeipTask" "Customer Experience Improvement Program\\UsbCeip" "Customer Experience Improvement Program\\Uploader" "Autochk\\Proxy" "CloudExperienceHost\\CreateObjectTask" "DiskDiagnostic\\Microsoft-Windows-DiskDiagnosticDataCollector" "DiskFootprint\\Diagnostics" "UpdateOrchestrator\\Schedule Scan" "WindowsUpdate\\Scheduled Start" "Servicing\\StartComponentCleanup" "Recovery Environment\\VerifyWinRE" "EDP\\StorageCardEncryption Task" "BitLocker\\BitLocker Encrypt All Drives" "BitLocker\\BitLocker MDM policy Refresh" "ApplicationData\\DsSvcCleanup") do schtasks /change /tn "Microsoft\\Windows%%~i" /disable'
        : ";",
      add == "YES"
        ? "@powershell set-ProcessMitigation -System -Disable  DEP, EmulateAtlThunks, SEHOP, ForceRelocateImages, RequireInfo, BottomUp, HighEntropy, StrictHandle, DisableWin32kSystemCalls, AuditSystemCall, DisableExtensionPoints, BlockDynamicCode, AllowThreadsToOptOut, AuditDynamicCode, CFG, SuppressExports, StrictCFG, MicrosoftSignedOnly, AllowStoreSignedBinaries, AuditMicrosoftSigned, AuditStoreSigned, EnforceModuleDependencySigning, DisableNonSystemFonts, AuditFont, BlockRemoteImageLoads, BlockLowLabelImageLoads, PreferSystem32, AuditRemoteImageLoads, AuditLowLabelImageLoads, AuditPreferSystem32, EnableExportAddressFilter, AuditEnableExportAddressFilter, EnableExportAddressFilterPlus, AuditEnableExportAddressFilterPlus, EnableImportAddressFilter, AuditEnableImportAddressFilter, EnableRopStackPivot, AuditEnableRopStackPivot, EnableRopCallerCheck, AuditEnableRopCallerCheck, EnableRopSimExec, AuditEnableRopSimExec, SEHOP, AuditSEHOP, SEHOPTelemetry, TerminateOnError, DisallowChildProcessCreation, AuditChildProcess"
        : ";",
      add == "YES" ? "echo [0] Fixing registry" : ";",
      add == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\csrss.exe\\PerfOptions" /v CpuPriorityClass /t REG_DWORD /d 3 /f'
        : ";",
      add == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\VALORANT-Win64-Shipping.exe\\PerfOptions" /v CpuPriorityClass /t REG_DWORD /d 3 /f'
        : ";",
      add == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\FortniteClient-Win64-Shipping.exe\\PerfOptions" /v CpuPriorityClass /t REG_DWORD /d 3 /f'
        : ";",
      add == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\csrss.exe\\PerfOptions" /v IoPriority /t REG_DWORD /d 3 /f'
        : ";",
      add == "YES"
        ? 'reg add "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\DriverSearching" /v SearchOrderConfig /t REG_DWORD /d 0 /f'
        : ";",
      add == "YES" ? "echo [0] Editing BCD" : ";",
      add == "YES" ? "bcdedit /deletevalue {current} nx" : ";",
      add == "YES" ? "bcdedit /deletevalue nx" : ";",
      add == "YES" ? "echo [0] Disabling devices in device manager" : ";",
      add == "YES"
        ? '@powershell Disable-PnpDevice -InstanceId "ROOT\\CompositeBus\\0000" -Confirm:$false'
        : ";",
      add == "YES"
        ? '@powershell Disable-PnpDevice -InstanceId "ACPI\\PNP0103\\0" -Confirm:$false'
        : ";",
      add == "YES"
        ? '@powershell Disable-PnpDevice -InstanceId "ACPI\\PNP0100\\0" -Confirm:$false'
        : ";",
      add == "YES"
        ? '@powershell Disable-PnpDevice -InstanceId "ACPI\\PNP0100\\4&4b8afdd&0" -Confirm:$false'
        : ";",
      add == "YES" ? "echo [0] Fixing Startup Preferences" : ";",
      add == "YES"
        ? 'for /f "tokens=2 delims==" %%G in (\'wmic startup list full /format:list ^| findstr /i "commandline"\') do ('
        : ";",
      add == "YES" ? '    set "cmdline=%%G"' : ";",
      add == "YES" ? "    bcdedit /set {%%G} disabled" : ";",
      add == "YES" ? ")" : ";",
      add == "YES" ? "echo." : ";",
      add == "YES" ? "powercfg -h off" : ";",
      "echo [Always On] Fixing Valorant Anticheat",
      'reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v "MitigationOptions" /t REG_QWORD /d 4194304 /f',
      'reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\TPM" /v "Start" /t REG_DWORD /d 2 /f',
      "echo.",
      "echo.",
      "echo Optimized by tanos.is-a.dev, donations available on https://www.paypal.com/paypalme/tanospaypal",
      "echo Successfully ran every command! Restart to see changes",
      "echo.",
      'mshta javascript:alert^("All actions completed! Restart to see changes"^);close^(^);',
      "pause",
    ];

    var delay = 100;
    steps.forEach(function (step) {
      setTimeout(function () {
        document.getElementById("teext").innerHTML += step + "<br>";
      }, delay);
      delay += Math.floor(Math.random() * (50 - 5 + 1)) + 2;
    });
  }, 1000);

  setTimeout(function () {
    document.getElementById("add").style.display = "none";
    document.getElementById("fpsquest").textContent =
      "Files have been prepared";
    document.getElementById("fpstxt").innerHTML =
      "Please follow the instructs below.";
    document.getElementById("teext").style.display = "none";

    document.getElementById("downloads").style.opacity = 0;
    document.getElementById("downloads").style.display = "block";
    $("#downloads").animate(
      {
        opacity: "1",
      },
      250
    );

    if (defender == "UNINSTALL") {
      document.getElementById("defend").style.display = "block";
    }

    if (graphicalcard == "Iris") {
      document.getElementById("iirs").style.display = "block";
    }

    if (win == "10") {
      document.getElementById("gpd").style.display = "block";
    }

    if (graphicalcard == "IRIS") {
      document.getElementById("iirs").style.display = "block";
    }

    if (graphicalcard == "iris") {
      document.getElementById("iirs").style.display = "block";
    }

    if (graphicalcard == "NVIDIA") {
      document.getElementById("nvclean").style.display = "block";
    }
  }, 6000);
}
