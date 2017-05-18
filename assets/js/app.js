if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js', { scope: './'})
        .then(function(regServiceWorker) {
            console.log("Service worker registered");
        })
        .catch(function(error) {
            console.log("Service worker can't load ", error);
        })
} else {
    console.log("HTTP error!");
}