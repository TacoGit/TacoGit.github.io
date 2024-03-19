function addComment() {
  var message = "Test"
  var name = "EXAMPLE"
  var discord = "@example#0000"

  name = name.toLowerCase()

  var letter = Array.from(name)[0];

  name = name.toUpperCase()

  $('#comments').append(`<div class="media"><div class="media-left"><div class="avatarholder">${letter}</div></div><div class="media-body"><div class="media-heading">${name} ${discord}</div><div class="media-content">${message}</div></div></div>`);
}

function addPays() {
  var address = "nano_test"
  var username = "testa"
  var currency = "nano"
  var bonus = "1"

  $('#pays').append(`<tr><td>${address}</td><td>${username}</td><td>${currency}</td><td>${bonus}</td></tr>`);
}

function serviceFailed() {
  $('#alert').append(`<div class="alert alert-error">Unavailable Service!</div>`);
}
function servicePaid() {
  $('#alert').append(`<div class="alert alert-success">Successfully paid!</div>`);
}
function serviceWarn(message) {
  if (!message || message.length < 2)
    return serviceFailed()
  $('#alert').append(`<div class="alert alert-warning">${message}</div>`);
}
function clearAllService() {
  const elements1 = Array.from(
    document.getElementsByClassName('alerts')
  );

  elements1.forEach(element => {
    element.parentNode.removeChild(element);
  });
  $('#main').append(`<div class="alerts" id="alert"></div>`);
}

serviceFailed()