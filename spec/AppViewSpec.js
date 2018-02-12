describe("AppView", function() {

var appView;

  beforeEach(function() {
    appView = new AppView()
  });

  describe("#returnWordNotFound", function() {
    it("returns the correct <div> when the word is not found", function() {
      expect(appView.returnWordNotFound()).toEqual('<div id="word-fact-div" class="word">The dictionary does not know that word. Please try again.</div>')
    });
  });

  describe("#returnWordInElements", function() {
    it("returns the word, its lexicalCategory and its definition in HTML", function() {
      var testWord = {
        word: "stock",
        lexicalCategory: "Verb",
        definition: "keep a particular product"
      }
      expect(appView.returnWordInElements(testWord)).toEqual('<div id="word-div"><h1 class="word-title">stock</h1><p class="word-lexicon">Verb</p><p class="word-description">keep a particular product</p><div id="next"><i id="next" class="fas fa-arrow-right"></i></div></div>')
    });
  });
});
