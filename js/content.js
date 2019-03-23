
function countLike() {
    var count = $('._6a-y._3l2t._18vj').not('._3_16._6a-y._3l2t._18vj').length;
    return count;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message == "countLikeFB"){
            var count = countLike();
            sendResponse({number: count});
        }
      }
   )