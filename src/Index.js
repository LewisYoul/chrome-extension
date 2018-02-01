var app = new App()

var word = app.returnLongestWord(document.body.innerText)

$.ajax({
  url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/sausage",
  beforeSend: function(xhr){
    xhr.setRequestHeader('app_id', '8aedcaf1')
    xhr.setRequestHeader('app_key', '631529d8a03ed59b7f9944f6a476bf21')
  },
  success: function(data) { console.log(data) }
});
