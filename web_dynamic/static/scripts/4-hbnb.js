document.addEventListener('DOMContentLoaded', function () {
    // Function to handle button click event
    document.querySelector('button').addEventListener('click', function () {
        // Get list of checked amenities
        const checkedAmenities = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(input => input.dataset.id);

        // Send POST request to places_search endpoint with checked amenities
        fetch('http://0.0.0.0:5000/api/v1/places_search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amenities: checkedAmenities })
        })
            .then(response => response.json())
            .then(data => {
                // Clear existing place articles
                document.querySelector('section.places').innerHTML = '';

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
    });
});
