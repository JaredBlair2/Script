// Shadowrocket Script - HTTP Request Listener for Specific URL

// Define the URL pattern to listen for
const urlPattern = /^https:\/\/gpm-mon-va\.bytegsdk\.com\/monitor\/appmonitor\/v4\/batch_settings\?sdk_app_id=6571&game_sdk_type=gapp&app_version_minor=2\.6\.0&version_code=2\.6\.0$/;

// Function to handle the HTTP request
function onRequest(request) {
    // Infinite loop to keep triggering the notification
    while (true) {
        // Check if the request URL matches the specified pattern
        if (urlPattern.test(request.url)) {
            // Show a notification on iOS
            $notification.post("URL Matched", "The specified URL was detected", request.url);
        }

        // Delay to prevent blocking the device (optional)
        sleep(1000);  // sleep for 1 second before the next iteration
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
