// Shadowrocket Script - Traffic Generation with Simulated Errors

// Define the URL pattern to listen for
const urlPattern = /^http:\/\/192\.168\.0\.1\/HNAP1\/$/;

// Function to handle the HTTP request and generate traffic with simulated errors
function generateTrafficWithErrors() {
    // Infinite loop to continuously generate traffic and simulate errors
    while (true) {
        // Simulate a high traffic load
        for (let i = 0; i < 1000; i++) {  // Send a large number of requests
            // Asynchronously send requests with intentionally malformed headers
            $httpClient.get({
                url: "http://192.168.0.1/HNAP1/",
                headers: {
                    "X-Force-Error": "true",  // Custom header to simulate error
                    "User-Agent": "Shadowrocket Overload Test"
                }
            }, function(error, response, data) {
                if (error || response.status !== 200) {
                    // Log the error (simulated or real)
                    console.log("Simulated error or failed request: " + error || response.status);

                    // Intentionally cause delay to increase system stress
                    sleep(100);  // Sleep for 100ms between batches to increase load
                } else {
                    console.log("Request succeeded with status: " + response.status);
                }
            });
        }

        // Simulate a long delay or timeout to trigger Shadowrocket's timeout error handling
        sleep(1000);  // Sleep for 1 second between high traffic bursts

        // Optional: Introduce a critical error by overloading the system
        if (Math.random() < 0.1) {  // Random chance to simulate a critical error
            console.log("Critical simulated error: Forcing shutdown");
            $done({error: "Simulated critical error to force VPN shutdown"});
            break;
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

// Run the traffic generation with simulated errors function
generateTrafficWithErrors();
