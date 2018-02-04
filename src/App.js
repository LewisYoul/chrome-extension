function App(appView = new AppView()) {
  this.appView = appView
  this.currentEntry = 0
}

App.prototype.sendGetRequest = function(selectedWord) {
  var self = this
  return $.ajax({
    url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + selectedWord,
    beforeSend: function(xhr){
      xhr.setRequestHeader('app_id', '8aedcaf1')
      xhr.setRequestHeader('app_key', '631529d8a03ed59b7f9944f6a476bf21')
    },
    error: function(err) {
      console.log(err)
      $('#word-fact-div').remove()
      $('body').prepend(self.appView.returnWordNotFound())
    }
  });
}

App.prototype.isAlphabetical = function(string) {
  return /[a-z]/i.test(string)
}

App.prototype.nextWordEntry = function(wordArray) {
  console.log(this.currentEntry)
  var htmlToInject;
  if (wordArray[this.currentEntry]) {
    htmlToInject = this.appView.returnWordInElements(wordArray[this.currentEntry])
    this.incrementEntryByOne()
  } else {
    this.currentEntry = 0
    htmlToInject = this.appView.returnWordInElements(wordArray[this.currentEntry])
    this.incrementEntryByOne()
  }
  return htmlToInject
}

App.prototype.incrementEntryByOne = function() {
  this.currentEntry += 1
}
