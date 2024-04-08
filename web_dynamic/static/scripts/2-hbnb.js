document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch API status
    function fetchAPIStatus() {
        // Send GET request to API
        fetch('http://0.0.0.0:5001/api/v1/status/')
            .then(response => response.json())
            .then(data => {
                // Check if status is "OK"
                if (data.status === 'OK') {
                    // Add class "available" to div#api_status
                    document.getElementById('api_status').classList.add('available');
                } else {
                    // Remove class "available" from div#api_status
                    document.getElementById('api_status').classList.remove('available');
                }
            })
            .catch(error => {
                console.error('Error fetching API status:', error);
            });
    }

    // Call fetchAPIStatus function initially
    fetchAPIStatus();

    // Set interval to fetch API status every 5 seconds
    setInterval(fetchAPIStatus, 5000);
});
