var data;

chrome.storage.local.get("word", function(data) {
    if(typeof data.word == "undefined") {
        console.log("oh no")
    } else {
        data = data
        $('#popup').text(data.word.title + ' - ' + data.word.definition)
    }
});
