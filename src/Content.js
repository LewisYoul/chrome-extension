function App() {
}

App.prototype.sendGetRequest = function(selectedWord) {
  $.ajax({
    url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + selectedWord,
    beforeSend: function(xhr){
      xhr.setRequestHeader('app_id', '8aedcaf1')
      xhr.setRequestHeader('app_key', '631529d8a03ed59b7f9944f6a476bf21')
    },
    error: function(err) {
      console.log(err)
      $('#word-fact-div').remove()
      $('body').prepend('<div id="word-fact-div" class="word">The dictionary does not know that word. Please try again.</div>')
    },
    success: function(data) {
      console.log(data)
      $('#word-fact-div').remove()
      $('body').prepend('<div id="word-fact-div" class="word"><h1 class="word-title">'+ data.results["0"].word + '</h1><p class="word-description">' + data.results["0"].lexicalEntries["0"].entries["0"].senses["0"].definitions["0"] + '</p></div>')
    }
  });
}

App.prototype.isAlphabetical = function(string) {
  return /[a-z]/i.test(string)
}
