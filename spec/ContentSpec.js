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
    it("doesn't return a word that is longer than 10 characters", function() {
      expect(app.returnLongestWord("one,two three'4;five-duckling,sweetbabyjesus").word).toEqual("duckling")
    });
  });

  describe("#splitWordsByCapital", function() {
    it("returns 'the' as the first word", function() {
      expect(app.splitWordsByCapital(["theCat"])[0]).toEqual("the")
    });
    it("returns 'Buns' as the third word", function() {
      expect(app.splitWordsByCapital(["theCatBunsRabbitVulture"])[2]).toEqual("Buns")
    });
  });
});
