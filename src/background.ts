const nativeMessagingPort = chrome.runtime.connectNative("org.viuws.desktop");
chrome.runtime.onConnect.addListener((contentScriptPort) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contentScriptPort.onMessage.addListener((message, port) => {
        // TODO
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nativeMessagingPort.onMessage.addListener((message, port) => {
        // TODO
    });
});
