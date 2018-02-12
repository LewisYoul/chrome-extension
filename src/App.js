function App(appView = new AppView()) {
  this.appView = appView
  this.currentEntry = -1
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
  this.incrementEntryByOne()
  if (wordArray[this.currentEntry]) {
    return this.appView.returnWordInElements(wordArray, this.currentEntry)
  } else {
    this.currentEntry = 0
    return this.appView.returnWordInElements(wordArray, this.currentEntry)
  }
}

App.prototype.previousWordEntry = function(wordArray) {
  this.decreaseEntryByOne()
  if (wordArray[this.currentEntry]) {
    return this.appView.returnWordInElements(wordArray, this.currentEntry)
  }
}

App.prototype.incrementEntryByOne = function() {
  this.currentEntry += 1
}

App.prototype.decreaseEntryByOne = function() {
  this.currentEntry -= 1
}
