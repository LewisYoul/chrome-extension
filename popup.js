var data;

chrome.storage.local.get("word", function(data) {
    if(typeof data.word == "undefined") {
        console.log("oh no")
    } else {
        data = data
        $('#word').text(data.word.title)
        $('#definition').text(data.word.definition)
    }
});
