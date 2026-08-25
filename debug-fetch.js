// Debug script to test fetch to Sentinel gateway
const SENTINEL_URL = "http://127.0.0.1:8001";

async function testFetch() {
  try {
    console.log("Testing fetch to:", `${SENTINEL_URL}/api/method/sentinel_dpdp.sentinel_dpdp.api.v1.privacy.capture_event`);
    
    const response = await fetch(`${SENTINEL_URL}/api/method/sentinel_dpdp.sentinel_dpdp.api.v1.privacy.capture_event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        principal: {
          name: "Test User",
          email: "test@example.com",
          phone: "+919876543210"
        },
        processing: {
          purpose: 'ENQUIRY_HANDLING',
          lawful_basis: 'Certain Legitimate Use - Specified Purpose Voluntary'
        },
        preferences: {
          marketing: false
        },
        notice: {
          language: "English"
        },
        source: {
          system: 'TruSync-Website',
          form: 'contact-us-page',
          service_requested: 'CRM'
        }
      })
    });
    
    console.log("Response status:", response.status);
    console.log("Response headers:", Object.fromEntries(response.headers));
    
    const data = await response.json();
    console.log("Response data:", data);
    
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// If running in browser context, execute the test
if (typeof window !== 'undefined') {
  testFetch().then(result => {
    console.log("Test completed successfully:", result);
  }).catch(error => {
    console.error("Test failed:", error);
  });
} else {
  console.log("This script is meant to run in browser context");
}

module.exports = { testFetch };