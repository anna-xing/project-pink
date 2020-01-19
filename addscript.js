window.onload = function() {

    // Recording restroom, menstrual products, or both

    let addRestroom = false;
    let addFHP = false;

    let nodeType = Array.from(document.querySelectorAll(".node-btn"));

    for (let i = 0; i < nodeType.length; i++) {
        nodeType[i].addEventListener("click", function() {
            nodeType[i].classList.toggle("active");
            nodeType[i].classList.toggle("btn-outline-dark");
            nodeType[i].classList.toggle("btn-dark");
        });
    }

    if (nodeType[0].classList.contains("active")) {
        addRestroom = true;
    }

    if (nodeType[1].classList.contains("active")) {
        addFHP = true;
    }

    // Recording address input

    let submitBtn = document.querySelector("#submit");
    let addressField = document.querySelector("#address");
    let userPosnField = document.querySelector("#user-location");
    let address;

    // addressField.addEventListener("click", function() {
    //     tempAddress = addressField.textContent;
    //     address = tempAddress + 0; // call api to interpret input as valid address
    // });

    // function getLatitude(place) {
    //     //insert api here for getting latitude from address
    // }

    // function getLongitude(place) {
    //     // insert api here for getting longitude from address
    // }

    // function Location(x) {
    //     this.latitude = getLatitude(x);
    //     this.longitude = getLongitude(x);
    // }

    // let locationList = [];
    // // Science Teaching Complex
    // locationList.push(new google.maps.LatLng(43.470536, -80.543526));
    // // Earth Sciences Museum
    // locationList.push(new google.maps.LatLng(43.471549, -80.541832));
    // // QNC
    // locationList.push(new google.maps.LatLng(43.471319, -80.543943));

    submitBtn.addEventListener("click", function() {
        newLocation = new Location(address);
        locationList.push(newLocation);
        window.location.href = "searchmap.html";
    });

}