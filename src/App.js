function App(appView = new AppView()) {
  this.appView = appView
}

App.prototype.sendGetRequest = function(selectedWord) {
  var self = this
  $.ajax({
    url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + selectedWord,
    beforeSend: function(xhr){
      xhr.setRequestHeader('app_id', '8aedcaf1')
      xhr.setRequestHeader('app_key', '631529d8a03ed59b7f9944f6a476bf21')
    },
    error: function(err) {
      console.log(err)
      $('#word-fact-div').remove()
      $('body').prepend(self.appView.returnWordNotFound())
    },
    success: function(data) {
      console.log(data)
      $('#word-fact-div').remove()
      $('body').prepend('<div id="word-fact-div" class="word"></div>')
      var allEntries = data.results["0"].lexicalEntries.map(function(entry) {
        return {
          word: entry.text,
          lexicalCategory: entry.lexicalCategory,
          definition: entry.entries["0"].senses["0"].definitions["0"]
        }
      });
      console.log(allEntries)
      allEntries.forEach(function(entry) {
        console.log(entry)
        $('#word-fact-div').prepend(self.appView.returnWordInElements(entry))
      });
    }
  });
}

App.prototype.isAlphabetical = function(string) {
  return /[a-z]/i.test(string)
}
