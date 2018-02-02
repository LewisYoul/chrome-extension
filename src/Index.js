document.addEventListener("mouseup", function() {
  selected = document.getSelection().toString().toLowerCase()

  $.ajax({
    url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + selected,
    beforeSend: function(xhr){
      xhr.setRequestHeader('app_id', '8aedcaf1')
      xhr.setRequestHeader('app_key', '631529d8a03ed59b7f9944f6a476bf21')
    },
    error: function(data) {
      chrome.storage.local.set({
        word: {
          title: "Unknown",
          definition: "Please select another word"
        }
      });
    },
    success: function(data) {
      chrome.storage.local.set({
        word: {
          title: data.results["0"].word,
          definition: data.results["0"].lexicalEntries["0"].entries["0"].senses["0"].definitions["0"]
        }
      });
      $('#word-fact-div').remove()
      $('body').prepend('<div id="word-fact-div" style="z-index: 1000; position: fixed; bottom: 0; width: 100%; background-color: pink">'+ data.results["0"].word + ' - ' + data.results["0"].lexicalEntries["0"].entries["0"].senses["0"].definitions["0"] + '</div>')
    }
  });
});
