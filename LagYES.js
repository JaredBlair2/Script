// Shadowrocket Script - Moderate Traffic Generation to neverssl.com

// Define the URL pattern to listen for (matches the specific neverssl.com URL)
const urlPattern = /^http:\/\/astoundingcoolrelaxedspell\.neverssl\.com\/online\/$/;

// Function to handle the HTTP request and generate traffic
function onRequest(request) {
    // Check if the request URL matches the specified pattern
    if (urlPattern.test(request.url)) {
        // Show a notification on iOS
        $notification.post("URL Matched - Moderate Traffic Generation", "Generating traffic to:", request.url);

        // Loop to generate a moderate amount of traffic
        for (let i = 0; i < 1000; i++) {  // Reduced the number of requests to a moderate level
            // Asynchronously send requests in parallel
            $httpClient.get(request.url, function(error, response, data) {
                if (error) {
                    // Log the error (optional)
                    console.log("Request failed: " + error);
                } else {
                    // Log success (optional)
                    console.log("Request succeeded with status: " + response.status);
                }
            });

            // Introduce a short delay to moderate the traffic further
            sleep(100);  // Sleep for 100ms between each request
        }
    }
}

// Simulate sleep/delay function
function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Busy wait
    }
}

// Attach the function to handle the HTTP request event
onRequest($request);
