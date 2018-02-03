describe("App", function() {

  beforeEach(function() {
    app = new App()
  });

  describe("isAlphabetical", function() {
    it("returns true if provided with a real word", function() {
      expect(app.isAlphabetical("cat")).toEqual(true)
    });
    it("returns false if given string that contains a space", function() {
      expect(app.isAlphabetical(" ")).toEqual(false)
    });
    it("returns false if given string that contains a number", function() {
      expect(app.isAlphabetical("3")).toEqual(false)
    });
    it("returns false if given string that contains punctuation", function() {
      expect(app.isAlphabetical(".")).toEqual(false)
    });
  })

  describe("#nextWordEntry", function() {
    it("returns the first entry in the array", function() {
      var wordArray = [
        {
          word: "stock",
          lexicalCategory: "Verb",
          definition: "keep a particular product"
        },
        {
          word: "cat",
          lexicalCategory: "Noun",
          definition: "not a dog"
        }
      ]
      expect(app.nextWordEntry(wordArray, 0)).toEqual('<h1 class="word-title">stock</h1><p>Verb</p><p class="word-description">keep a particular product</p><p id="next">NEXT</p>')
    });
    it("returns the second entry in the array", function() {
      var wordArray = [
        {
          word: "stock",
          lexicalCategory: "Verb",
          definition: "keep a particular product"
        },
        {
          word: "cat",
          lexicalCategory: "Noun",
          definition: "not a dog"
        }
      ]
      app.currentEntry = 1
      expect(app.nextWordEntry(wordArray)).toEqual('<h1 class="word-title">cat</h1><p>Noun</p><p class="word-description">not a dog</p><p id="next">NEXT</p>')
    });
    it("returns the second entry in the array", function() {
      var wordArray = [
        {
          word: "stock",
          lexicalCategory: "Verb",
          definition: "keep a particular product"
        },
        {
          word: "cat",
          lexicalCategory: "Noun",
          definition: "not a dog"
        }
      ]
      app.currentEntry = 2
      expect(app.nextWordEntry(wordArray)).toEqual('<h1 class="word-title">stock</h1><p>Verb</p><p class="word-description">keep a particular product</p><p id="next">NEXT</p>')
    });
  });
});
