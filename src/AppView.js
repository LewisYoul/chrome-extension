function AppView() {
}

AppView.prototype.returnWordNotFound = function() {
  return '<div id="word-fact-div" class="word">The dictionary does not know that word. Please try again.</div>'
}

AppView.prototype.returnWordInElements = function(wordArray, currentEntry) {
  var entry = wordArray[currentEntry]
  return '<div id="word-div"><h1 class="word-title">' + entry.word +
    '</h1><p class="word-lexicon">' + entry.lexicalCategory +
    '</p><p class="word-description">' + entry.definition +
    '</p><p>' + (currentEntry + 1) + ' of ' + wordArray.length +
    '</p><div id="previous"><i class="fas fa-arrow-left"></i></div><div id="next"><i class="fas fa-arrow-right"></i></div></div>'
}
