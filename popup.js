document.getElementById('clipCoupons').onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['js/CVSCLICKER.js']
    });
  });
};
