chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: './medium-fixed-player.js'
    });
});
