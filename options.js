//Save option to Chrome.
function save_options() {
  var emailService = document.querySelector('input[name="email"]:checked').value;
  chrome.storage.sync.set({
    email: emailService
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    email: 'outlook',
  }, function(items) {
    document.getElementById(items.email + 'Radio').checked = true;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);