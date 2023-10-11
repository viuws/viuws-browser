const serviceWorkerPort = chrome.runtime.connect();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
window.addEventListener("message", (event) => {
    // TODO
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
serviceWorkerPort.onMessage.addListener((message, port) => {
    // TODO
});
