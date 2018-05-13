// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

	var url = tab.url;
	var title = tab.title;
	var emailService;
	
	chrome.storage.sync.get({
		email: 'outlook',
	}, function(items) {
		emailService = items.email;
		if(emailService == 'outlook') {
			chrome.tabs.update({
				url: "mailto:" + "?subject=FYI: " + title + "&body=" + url
			});
		} else if(emailService == 'gmail') {
			chrome.tabs.create({
				url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1" + "&su=FYI:" + title + "&body=" + url
			});
		} else {
			console.log("Preference not set.");
		}
	});
	
});