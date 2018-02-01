function App() {
}

App.prototype.returnLongestWord = function(string) {
  var words = string.split(/[^a-zA-Z']/);
  words = this.splitWordsByCapital(words)
  var longestWord = { word: "", length: 0 }

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length && (words[i].length < 10)) {
      longestWord.word = words[i]
      longestWord.length = words[i].length
    }
  }
  return longestWord
}

App.prototype.splitWordsByCapital = function(wordsArray) {
  var finalArray = []
  wordsArray.forEach(function(word) {
    finalArray = word.split(/(?=[A-Z])/).concat(finalArray)
  });
  return finalArray
}
