
document.addEventListener('DOMContentLoaded', function() {
  var api_body = document.getElementById('api-body');
  var api_window = document.getElementById('api-iframe');

  api_body.style.height = "";
  api_body.style.width = "";

  api_window.src = 'about:blank'
  chrome.tabs.getSelected(null, function(tab) {
    console.log('tab')
    api_window.src = 'https://www.shopswell.com/api?url='+encodeURIComponent(tab.url)
  })
}, false);

window.addEventListener("message", function(event) {
  var api_body = document.getElementById('api-body');
  var size = JSON.parse(event.data);
  api_body.style.height = size.height + "px";
  api_body.style.width = size.width + "px";
});