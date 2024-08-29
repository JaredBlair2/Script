// Shadowrocket Script - Lag Switch Traffic Generation

// Define the URL pattern to listen for
const urlPattern = /^http:\/\/192\.168\.0\.1\/HNAP1\/$/;

// Function to handle the HTTP request and generate traffic to induce lag
function generateLagTraffic() {
    // Infinite loop to continuously generate traffic
    while (true) {
        // Create a moderate number of parallel requests to generate lag
        for (let i = 0; i < 500; i++) {
            $httpClient.get({
                url: "http://192.168.0.1/HNAP1/",
                timeout: 10000,  // Set a reasonable timeout value to avoid hanging requests too long
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

        // Introduce a delay between batches to avoid crashing the system
        sleep(500);  // Sleep for 500ms to simulate intermittent lag

        // Optional: Introduce random longer delays to simulate more unpredictable lag
        if (Math.random() < 0.1) {  // 10% chance of a longer delay
            console.log("Introducing random lag delay");
            sleep(2000);  // Sleep for 2 seconds to simulate a more significant lag spike
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

// Run the lag traffic generation function
generateLagTraffic();
