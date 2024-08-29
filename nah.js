// Shadowrocket Script - Robust DNS Lag Switch with gateway.icloud.com

// Define the base domain for DNS queries
const baseDomain = "gateway.icloud.com";

// Function to generate random subdomains
function generateRandomSubdomain() {
    return Math.random().toString(36).substring(2, 15) + "." + baseDomain;
}

// Function to send DNS queries and induce lag
function generateRobustDNSLag() {
    while (true) {
        // Generate a large number of DNS queries in parallel
        for (let i = 0; i < 500; i++) {  // Increased the number of requests to amplify the lag effect
            const queryDomain = generateRandomSubdomain();
            
            $httpClient.get({
                url: "http://" + queryDomain,
                headers: {
                    "User-Agent": "Shadowrocket-DNS-LagSwitch",
                    "X-LagSwitch": "true"
                }
            }, function(error, response, data) {
                if (error) {
                    // Log the DNS query error (optional)
                    console.log("DNS query error: " + error);
                } else {
                    // Log success (optional)
                    console.log("DNS query succeeded for: " + queryDomain);
                }
            });
        }

        // Introduce a short delay to prevent system overload but keep the pressure on the DNS resolver
        sleep(100);  // Sleep for 100ms between batches to maintain continuous pressure

        // Randomly induce a significant lag spike with longer delays
        if (Math.random() < 0.5) {  // 50% chance to induce a lag spike
            console.log("Inducing significant DNS lag spike");
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

// Run the robust DNS lag switch function with gateway.icloud.com as the base domain
generateRobustDNSLag();
