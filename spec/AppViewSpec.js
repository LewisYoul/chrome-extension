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
});
