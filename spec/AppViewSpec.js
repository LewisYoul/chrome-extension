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
    it("renders the number of lexical entries", function() {
      var currentEntry = 0
      var testArray = [
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
      expect(appView.returnWordInElements(testArray, currentEntry)).toContain('1 of 2')
    });
  });
});
