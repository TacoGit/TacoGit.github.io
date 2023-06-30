function UrbanDictionary(n) {
  fetch("https://api.urbandictionary.com/v0/define?term=" + n).then(function(response) {
    return response.json();
  }).then(function(data) {
    if (data == `{"error":"An error occurred"}`) {
      console.log("Invalid word");
    }

    if (data.list.length == 0) {
      console.log("[-] Word not found");
    }
    else {
      console.log("Word: " + data.list[0].word);
      console.log("Definition: " + data.list[0].definition);
      console.log("Example: " + data.list[0].example);
    }
  });
}

function GuessAge(n) {
  fetch("https://api.agify.io/?name=" + n).then(function(response) {
    return response.json();
  }).then(function(data) {
    if (data == `{"error"`) {
      console.log("[-] Invalid name");
    }
    console.log("Name: " + data.name);
    console.log("Age: " + data.age);
  });
}

function Random_Anime_Quote() {
  fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote.quote))
}