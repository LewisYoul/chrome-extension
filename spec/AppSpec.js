describe("App", function() {

  beforeEach(function() {
    wordArray = [
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

    appView = jasmine.createSpyObj('AppView', {
      returnWordNotFound: '<NOT FOUND>',
      returnWordInElements: '<IN ELEMENTS>'
    });

    app = new App(appView)
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
      app.nextWordEntry(wordArray)
      expect(app.appView.returnWordInElements).toHaveBeenCalledWith(wordArray, 0)
    });
    it("returns the second entry in the array", function() {
      app.currentEntry = 0
      app.nextWordEntry(wordArray)
      expect(app.appView.returnWordInElements).toHaveBeenCalledWith(wordArray, 1)
    });
    it("returns the first entry in array when the currentEntry doesnt exist", function() {
      app.currentEntry = 2
      app.nextWordEntry(wordArray)
      expect(app.appView.returnWordInElements).toHaveBeenCalledWith(wordArray, 0)
    });
  });

  describe("#incrementEntryByOne", function() {
    it("increases the value of this.currentEntry by 1", function() {
      app.incrementEntryByOne()
      expect(app.currentEntry).toEqual(0)
    });
  });

  describe("#previousWordEntry", function() {
    it("renders the previous entry in the array if it exists", function() {
      app.currentEntry = 1
      app.previousWordEntry(wordArray)
      expect(app.appView.returnWordInElements).toHaveBeenCalledWith(wordArray, 0)
    });
    it ("renders the last entry in the array if the previous entry was the first", function() {
      app.currentEntry = 0
      app.previousWordEntry(wordArray)
      expect(app.appView.returnWordInElements).toHaveBeenCalledWith(wordArray, wordArray.length - 1)
    });
  });

  describe("#decreaseEntryByOne", function() {
    it("decreases the value of this.currentEntry by 1", function() {
      app.currentEntry = 2
      app.decreaseEntryByOne()
      expect(app.currentEntry).toEqual(1)
    });
  });
});
