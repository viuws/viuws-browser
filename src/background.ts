// const nativeHostPort = chrome.runtime.connectNative("org.viuws.client");
// chrome.runtime.onConnect.addListener((contentScriptPort) => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     contentScriptPort.onMessage.addListener((message, _port) => {
//         nativeHostPort.postMessage({
//             tab: null, // TODO
//             payload: message,
//         });
//     });
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     nativeHostPort.onMessage.addListener((message, _port) => {
//         if (
//             message.tab &&
//             message.payload &&
//             message.tab === null // TODO
//         ) {
//             contentScriptPort.postMessage(message.payload);
//         }
//     });
// });
