describe("returnLongestWord", function() {
  it("returns the longest word length", function() {
    expect(returnLongestWord("one,two three'4;five-duckling")).toEqual(8)
  });
});
