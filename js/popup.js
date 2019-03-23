countLike();
 function countLike() {    
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "countLikeFB"}, function(response) {
         $("#count").html(response.number);
      });
    });
 }