function returnLongestWord(string) {

  var words = string.split(/[^a-zA-Z']/)
  console.log(words.length)
  var longest = 0

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length
      console.log(longest)
    }
  }
  console.log(longest)
  return longest
}
