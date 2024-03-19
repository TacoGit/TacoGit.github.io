
activeNav = '';

function changePickupStoreMenu() {

  var body = $('body'),
    mask = $('<div class="mask"></div>'),
    toggleSlideRight = document.querySelector(".openmenu"),
    slideMenuRight = document.querySelector(".slide-menu-right");

  $('body').append(mask);
}
changePickupStoreMenu();

function openmenu() {
  document.getElementById("om").style.display = "none";
  $('body').addClass("smr-open");
  $('.mask').fadeIn();
  activeNav = "smr-open";
}

function closemenu() {
  document.getElementById("om").style.display = "block";
  $('body').removeClass(activeNav);
  activeNav = "";
  $('.mask').fadeOut();
}