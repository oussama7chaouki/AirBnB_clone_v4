document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch places data
    function fetchPlacesData() {
        // Send POST request to places_search endpoint
        fetch('http://0.0.0.0:5001/api/v1/places_search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(response => response.json())
            .then(data => {
                // Loop through places data and create article tags
                data.forEach(place => {
                    // Create article tag
                    const article = document.createElement('article');
                    article.className = 'place';
                    
                    // Create place description
                    const description = `
                        <div class="title_box">
                            <h2>${place.name}</h2>
                            <div class="price_by_night">$${place.price_by_night}</div>
                        </div>
                        <div class="information">
                            <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                            <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                            <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
                        </div>
                        <div class="description">
                            ${place.description}
                        </div>
                    `;
                    
                    // Set place description as inner HTML of article tag
                    article.innerHTML = description;
                    
                    // Append article tag to section.places
                    document.querySelector('section.places').appendChild(article);
                });
            })
            .catch(error => {
                console.error('Error fetching places data:', error);
            });
    }

    // Call fetchPlacesData function initially
    fetchPlacesData();
});
