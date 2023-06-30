function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0)
      return c.substring(name.length, c.length);
  }
  return "";
}

document.addEventListener("DOMContentLoaded", (ev) => {
  for (let i = 0; i < 5; i++) {
    console.log("!!                                               !!")
    console.log("!! DO NOT SEND ANYONE YOUR COOKIES OR HAR FILES    ")
    console.log("!!                                               !!")
    console.log("!! DO NOT COPY PASTE ANYTHING HERE FOR YOUR SAFETY ")
  }

  let anim = getCookie("animations");
  if (anim == '' || anim == ' ' || anim == undefined) {
    console.log("Animation:False")
    setCookie("animations", "false", 999999);
  }
  let isown = getCookie("isOwner");
  if (isown == '' || isown == ' ' || isown == undefined) {
    console.log("isOwner:False")
    setCookie("isOwner", "false", 999999);
  }

  if (getCookie("theme") == "dark") {
    go_dark_no_cookie()
  }

  document.getElementById("recent-orders--table").appendChild(buildTableBody());

  document
    .getElementsByClassName("recent-updates")
    .item(0)
    .appendChild(buildUpdatesList());

  const salesAnalytics = document.getElementById("analytics");
  buildSalesAnalytics(salesAnalytics);
});

const buildTableBody = () => {
  const recentOrderData = RECENT_ORDER_DATA;

  const tbody = document.createElement("tbody");

  let bodyContent = "";
  for (const row of recentOrderData) {
    bodyContent += `
      <tr>
        <td>${row.productName}</td>
        <td class="${row.statusColor}">${row.status}</td>
        <td class="primary">Details</td>
      </tr>
    `;
  }

  tbody.innerHTML = bodyContent;

  return tbody;
};

const buildUpdatesList = () => {
  const updateData = UPDATE_DATA;

  const div = document.createElement("div");
  div.classList.add("updates");

  let updateContent = "";
  for (const update of updateData) {
    updateContent += `
      <div class="update">
        <div class="profile-photo">
          <img src="${update.imgSrc}" />
        </div>
        <div class="message">
          <p>${update.message}</p>
          <small class="text-muted">${update.updatedTime}</small>
        </div>
      </div>
    `;
  }

  div.innerHTML = updateContent;

  return div;
};

const buildSalesAnalytics = (element) => {
  const salesAnalyticsData = SALES_ANALYTICS_DATA;

  for (const analytic of salesAnalyticsData) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add(analytic.itemClass);

    var link = analytic.link

    const itemHtml = `
      <div class="icon">
        <span class="material-icons-sharp"> ${analytic.icon} </span>
      </div>
      <div class="right">
        <div class="info">
          <h3>${analytic.title}</h3>
          <small class="text-muted"> ${analytic.link} </small>
        </div>
      </div>
    `;

    item.innerHTML = itemHtml;

    element.appendChild(item);
  }
};

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  CodeActivatable_ThemeChanger()
});

function go_dark_no_cookie() {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
}

function CodeActivatable_ThemeChanger() {
  document.body.classList.toggle("dark-theme-variables");

  let currentt = getCookie("theme");

  if (currentt == '' || currentt == ' ' || currentt == undefined) {
    console.log("No theme cookie, dark is applied")
    setCookie("theme", "dark", 999999);
  } else if (currentt == "light") {
    setCookie("theme", "dark", 999999);
  } else if (currentt == "dark") {
    setCookie("theme", "light", 999999);
  } else {
    console.log("corrupted cookies, removing theme cookie")
    document.cookie = "username=theme; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
}