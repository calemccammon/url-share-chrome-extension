// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  var url = tab.url;
  var title = tab.title;
  chrome.tabs.update({
     url: "mailto:" + "?subject=FYI: " + title + "&body=" + url
});
});