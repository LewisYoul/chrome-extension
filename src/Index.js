var app = new App()

var word = app.returnLongestWord(document.body.innerText).word.toLowerCase()

$.ajax({
  url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + word,
  beforeSend: function(xhr){
    xhr.setRequestHeader('app_id', '8aedcaf1')
    xhr.setRequestHeader('app_key', '631529d8a03ed59b7f9944f6a476bf21')
  },
  success: function(data) {
    console.log(data)
    var definition = data.results["0"].lexicalEntries["0"].entries["0"].senses["0"].definitions["0"]
    var word = data.results["0"].word
    console.log(data.results["0"].lexicalEntries["0"].entries["0"].senses["0"].definitions["0"])
    $('body').prepend('<div id="test">' +word + ' - '+ definition + '</div>')
    chrome.storage.local.set({
      word: {
        title: word,
        definition: definition
      }
    });
    console.log(word)
  }
});
