// Shadowrocket Script - Robust DNS Lag Switch for http://192.168.0.1/HNAP1/

// Base URL for the target
const baseURL = "http://192.168.0.1/HNAP1/";

// Function to generate random path extensions
function generateRandomPath() {
    return baseURL + Math.random().toString(36).substring(2, 15);
}

// Function to send DNS queries/HTTP requests and induce lag
function generateRobustLag() {
    while (true) {
        // Generate a large number of DNS queries/HTTP requests in parallel
        for (let i = 0; i < 500; i++) {  // Increased the number of requests to amplify the lag effect
            const queryURL = generateRandomPath();
            
            $httpClient.get({
                url: queryURL,
                headers: {
                    "User-Agent": "Shadowrocket-DNS-LagSwitch",
                    "X-LagSwitch": "true"
                }
            }, function(error, response, data) {
                if (error) {
                    // Log the request error (optional)
                    console.log("Request error: " + error);
                } else {
                    // Log success (optional)
                    console.log("Request succeeded for: " + queryURL);
                }
            });
        }

        // Introduce a short delay to prevent system overload but keep the pressure on the DNS resolver and target
        sleep(100);  // Sleep for 100ms between batches to maintain continuous pressure

        // Randomly induce a significant lag spike with longer delays
        if (Math.random() < 0.5) {  // 50% chance to induce a lag spike
            console.log("Inducing significant lag spike");
            sleep(5000);  // Sleep for 5 seconds to simulate major network lag
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

// Run the robust lag switch function for http://192.168.0.1/HNAP1/
generateRobustLag();
