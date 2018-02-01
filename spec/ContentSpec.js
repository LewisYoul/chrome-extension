describe("App", function() {

  beforeEach(function() {
    app = new App()
  });

  describe("#returnLongestWord", function() {
    it("returns the longest word", function() {
      expect(app.returnLongestWord("one,two three'4;five-duckling").word).toEqual("duckling")
    });
    it("returns the longest word length", function() {
      expect(app.returnLongestWord("one,two three'4;five-duckling").length).toEqual(8)
    });
  });
});
