
// On Click hand emoji will take you to the top of the page
document.getElementById('top-button').addEventListener('click', function() {
  window.scrollTo(0, 0);
});

$(window).scroll(function() {
  var threshold = 208; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
  if (op <= 13) {
    $("#top-button").show();
  } else {
    $("#top-button").hide();
  }
});

$('body').toggleClass('night')

$(window).load(function() {
  $("#top-button").hide();
});


// If you hover over the languages I used in project Box it will do fade in animation
$('.project_used span').on({
  mouseover: function() {
    event.preventDefault();
    $(this).animate({ opacity: 0.25 });
  },
  mouseout: function() {
    event.preventDefault();
    $(this).animate({ opacity: 1 });
  }
});


