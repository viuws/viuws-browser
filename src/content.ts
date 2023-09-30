// const serviceWorkerPort = chrome.runtime.connect();
// window.addEventListener(
//     "message",
//     (event) => {
//         if (event.source != window) return;
//         if (
//             event.data.type &&
//             event.data.text &&
//             event.data.type == "VIUWS_TO_NATIVE"
//         ) {
//             serviceWorkerPort.postMessage(event.data.text);
//         }
//     },
//     false,
// );
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// serviceWorkerPort.onMessage.addListener((message, _port) => {
//     window.postMessage(
//         {
//             type: "VIUWS_FROM_NATIVE",
//             text: message,
//         },
//         "*",
//     );
// });
