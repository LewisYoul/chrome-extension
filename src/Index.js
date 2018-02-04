var app = new App()
var counter = 0

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
      $('#word-fact-div').prepend(app.nextWordEntry(app.allEntries))

      $('#next').click(removeAndAdd);

      $(document.body).on('click', '#next', function() {
        console.log("BOSHTY")
      });
    });
  }
});

function removeAndAdd() {
  counter += 1
  $('#word-div').remove()
  $('#word-fact-div').prepend(app.nextWordEntry(app.allEntries))
  $('#next').click(removeAndAdd)
  console.log("Im the counter", counter)
}
