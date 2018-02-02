var app = new App()

document.addEventListener("mouseup", function() {
  selectedWord = document.getSelection().toString().toLowerCase()
  if (app.isAlphabetical(selectedWord)) {
    app.sendGetRequest(selectedWord)
  }
});
