var nativeHostPort = chrome.runtime.connectNative("org.viuws.client");
chrome.runtime.onConnect.addListener((contentScriptPort) => {
    contentScriptPort.onMessage.addListener((message, _port) => {
        nativeHostPort.postMessage({
            "tab": null,  // TODO
            "payload": message,
        });
    });
    nativeHostPort.onMessage.addListener((message, _port) => {
        if (
            message.tab
            && message.payload
            && (message.tab === null)  // TODO
        ) {
            contentScriptPort.postMessage(message.payload);
        }
    });
});
