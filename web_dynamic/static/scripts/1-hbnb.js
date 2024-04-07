$(document).ready(function() {
    // Variable to store checked amenity IDs
    var checkedAmenities = [];

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).closest('li').data('id');
        var amenityName = $(this).closest('li').data('name');

        if ($(this).is(':checked')) {
            // Add amenity ID to the list
            checkedAmenities.push(amenityId);
        } else {
            // Remove amenity ID from the list
            var index = checkedAmenities.indexOf(amenityId);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }

        // Update the h4 tag inside the div Amenities
        $('#amenities h4').text('Amenities: ' + checkedAmenities.join(', '));
    });
});
