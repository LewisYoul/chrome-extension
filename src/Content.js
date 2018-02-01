function App() {
}

App.prototype.returnLongestWord = function(string) {
  var words = string.split(/[^a-zA-Z']/)
  var longestWord = { word: "", length: 0 }

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord.word = words[i]
      longestWord.length = words[i].length
    }
  }
  return longestWord
}
