var serviceWorkerPort = chrome.runtime.connect();
window.addEventListener("message", (event) => {
    if (event.source != window)
        return;
    if (
        event.data.type
        && event.data.text
        && (event.data.type == "VIUWS_TO_NATIVE")
    ) {
        serviceWorkerPort.postMessage(event.data.text);
    }
}, false);
serviceWorkerPort.onMessage.addListener((message, _port) => {
    window.postMessage({
        "type": "VIUWS_FROM_NATIVE",
        "text": message,
    }, "*");
});
