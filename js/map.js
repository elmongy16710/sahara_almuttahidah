function initAutocomplete() {
    var myLatlng = new google.maps.LatLng(
        parseFloat($("#lat").val()),
        parseFloat($("#lng").val())
    ); // Add the coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 24.774265,
            lng: 46.738586
        },
        zoom: 8,
        mapTypeId: "roadmap",
    });

    var image = new google.maps.MarkerImage(
        `${window.location.origin}/admin/png/marker.png`,
        null,
        null,
        null,
        new google.maps.Size(65, 103)
    ); // Create a variable for our marker image.
    var marker = new google.maps.Marker({
        // Set the marker
        position: myLatlng, // Position marker to coordinates
        icon: image, //use our image as the marker
        map: map, // assign the market to our map variable
        title: "عرض المزيد من التفاصيل", // Marker ALT Text
    }); //  google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker //      window.location='https://www.snowdonrailway.co.uk/shop_and_cafe.php'; // URL to Link Marker to (i.e Google Places Listing) //  });
    var infowindow = new google.maps.InfoWindow({
        // Create a new InfoWindow
        content: "متجر جدارة", // HTML contents of the InfoWindow
    });
    google.maps.event.addListener(marker, "click", function () {
        // Add a Click Listener to our marker
        infowindow.open(map, marker); // Open our InfoWindow
    });
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(myLatlng);
    }); // Keeps the Pin Central when resizing the browser on responsive sites // Create the search box and link it to the UI element.

    const input = document.getElementById("address");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
    let markers = []; // Listen for the event fired when the user selects a prediction and retrieve // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        } // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = []; // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            }; // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }

            $("input[name='lat']").val(place.geometry.location.lat());
            $("input[name='lng']").val(place.geometry.location.lng());
        });
        map.fitBounds(bounds);
    });
}