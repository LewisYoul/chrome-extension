describe("AppView", function() {

var appView;

  beforeEach(function() {
    currentEntry = 0
    testArray = [
      {
        word: "stock",
        lexicalCategory: "Verb",
        definition: "keep a particular product"
      },
      {
        word: "car",
        lexicalCategory: "Noun",
        definition: "not a train"
      }
    ]
    appView = new AppView()
  });

  describe("#returnWordNotFound", function() {
    it("returns the correct <div> when the word is not found", function() {
      expect(appView.returnWordNotFound()).toEqual('<div id="word-fact-div" class="word">The dictionary does not know that word. Please try again.</div>')
    });
  });

  describe("#returnWordInElements", function() {
    it("returns the word inside an <h1> with class 'word-title'", function() {
      expect(appView.returnWordInElements(testArray, currentEntry)).toContain('<h1 class="word-title">stock</h1>')
    });
    it("renders the number of lexical entries", function() {
      expect(appView.returnWordInElements(testArray, currentEntry)).toContain('<p>1 of 2</p>')
    });
  });
});
