// Shadowrocket Script - Enhanced Lag Switch with Significant Lag Spikes

// Define the URL pattern to listen for
const urlPattern = /^http:\/\/192\.168\.0\.1\/HNAP1\/$/;

// Function to handle the HTTP request and generate traffic with significant lag spikes
function generateLagTraffic() {
    // Infinite loop to continuously generate traffic
    while (true) {
        // Randomize the number of parallel requests to generate traffic
        const requestCount = Math.floor(Math.random() * 150) + 50;  // Generate between 50 and 200 requests

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

        // Introduce a significant delay between batches to create more intense lag spikes
        const sleepTime = Math.floor(Math.random() * 2000) + 1000;  // Random sleep between 1s and 3s
        sleep(sleepTime);

        // Increase the frequency and duration of lag spikes
        if (Math.random() < 0.3) {  // 30% chance of a longer delay
            console.log("Introducing significant lag spike");
            sleep(5000);  // Sleep for 5 seconds to simulate a major lag spike
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

// Run the enhanced lag traffic generation function
generateLagTraffic();
