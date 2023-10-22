var vidurl = "placeholder";
var program = "placeholder";

function onResponse(response) {
  console.log(`Received: ${response}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function sendurl() {
	console.log("Sending: "+program+vidurl);
	let sending = browser.runtime.sendNativeMessage("ytdlplayer", "{"+program+vidurl+"}");
	sending.then(onResponse, onError);
}

function logTabs(tabs) {
  // tabs[0].url requires the `tabs` permission or a matching host permission.
  vidurl = tabs[0].url;
  console.log(vidurl);
  sendurl();
}

function urlgrab() {
	browser.tabs.query({ currentWindow: true, active: true })
	.then(logTabs);
}


/*
On a click on the browser action, send the app a message.
*/
document.getElementById("ytdl").onclick = function() {
program = "0";
urlgrab();
}

document.getElementById("mpv").onclick = function() {
program = "1";
urlgrab();
}

