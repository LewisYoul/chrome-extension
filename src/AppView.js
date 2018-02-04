function AppView() {
}

AppView.prototype.returnWordNotFound = function() {
  return '<div id="word-fact-div" class="word">The dictionary does not know that word. Please try again.</div>'
}

AppView.prototype.returnWordInElements = function(entry) {
  return '<div id="word-div"><h1 class="word-title">'+ entry.word + '</h1><p class="word-lexicon">' + entry.lexicalCategory + '</p><p class="word-description">' + entry.definition + '</p><div id="next"><i id="next" class="fas fa-arrow-right"></i></div></div>'
}
