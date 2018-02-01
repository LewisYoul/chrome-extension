chrome.storage.local.get("message", function(data) {
    if(typeof data.message == "undefined") {
        console.log("oh no")
    } else {
        console.log(data.message)
    }
});
