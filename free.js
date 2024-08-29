// Shadowrocket Script - Fine-Tuned Lag Switch Traffic Generation

// Define the URL pattern to listen for
const urlPattern = /^http:\/\/192\.168\.0\.1\/HNAP1\/$/;

// Function to handle the HTTP request and generate controlled traffic to induce lag
function generateLagTraffic() {
    // Infinite loop to continuously generate traffic
    while (true) {
        // Randomize the number of parallel requests to reduce load on the system
        const requestCount = Math.floor(Math.random() * 200) + 50;  // Generate between 50 and 250 requests

        for (let i = 0; i < requestCount; i++) {
            $httpClient.get({
                url: "http://192.168.0.1/HNAP1/",
                timeout: 5000,  // Set a moderate timeout value
                headers: {
                    "User-Agent": "Shadowrocket-LagSwitch",
                    "X-LagSwitch": "true"
                }
            }, function(error, response, data) {
                if (error) {
                    // Log the error (optional)
                    console.log("Request error: " + error);
                } else {
                    // Log success (optional)
                    console.log("Request succeeded with status: " + response.status);
                }
            });
        }

        // Introduce a longer delay between batches to reduce the chance of disconnection
        const sleepTime = Math.floor(Math.random() * 1000) + 500;  // Random sleep between 500ms and 1.5s
        sleep(sleepTime);

        // Occasionally introduce a more significant delay to simulate random lag spikes
        if (Math.random() < 0.05) {  // 5% chance of a longer delay
            console.log("Introducing random lag spike");
            sleep(3000);  // Sleep for 3 seconds to simulate a significant lag spike
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

// Run the fine-tuned lag traffic generation function
generateLagTraffic();
