var app = new App()

document.addEventListener("mouseup", function() {
  selectedWord = document.getSelection().toString().toLowerCase()
  if (app.isAlphabetical(selectedWord)) {
    $.when(app.sendGetRequest(selectedWord)).done(function(data) {
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
      app.allEntries = allEntries
      $('#word-fact-div').prepend(app.appView.returnWordInElements(app.allEntries[app.currentEntry]))
      $('#next').click(function() {
        $('#word-fact-div').remove()
        $('body').prepend('<div id="word-fact-div" class="word"></div>')
        $('#word-fact-div').prepend(app.appView.returnWordInElements(app.allEntries[app.currentEntry + 1]))
      });
    });
  }
});
