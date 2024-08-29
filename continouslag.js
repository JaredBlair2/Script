// Shadowrocket Script - High Traffic Generation to 192.168.0.1

// Define the URL pattern to listen for
const urlPattern = /^http:\/\/192\.168\.0\.1\/HNAP1\/$/;

// Function to handle the HTTP request and generate high traffic indefinitely
function generateHighTraffic() {
    // Infinite loop to continuously generate high traffic
    while (true) {
        // Send an HTTP GET request to the target URL
        $httpClient.get("http://192.168.0.1/HNAP1/", function(error, response, data) {
            if (error) {
                // Log the error (optional)
                console.log("Request failed: " + error);
            } else {
                // Log success (optional)
                console.log("Request succeeded with status: " + response.status);
            }
        });

        // Optional: Minimal delay to maximize traffic
        sleep(10);  // Sleep for 10ms between requests to increase traffic intensity
    }
}

// Simulate sleep/delay function
function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Busy wait
    }
}

// Run the traffic generation function
generateHighTraffic();
