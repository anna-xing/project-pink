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

    addressField.addEventListener("click", function() {
        tempAddress = addressField.textContent;
        address = tempAddress + 0; // call api to interpret input as valid address
    });

    userPosnField.addEventListener("click", function() {
        address = 0; // call api to determine user address
    });

    function getLatitude(place) {
        //insert api here for getting latitude from address
    }

    function getLongitude(place) {
        // insert api here for getting longitude from address
    }

    function Location(x) {
        this.latitude = getLatitude(x);
        this.longitude = getLongitude(x);
    }

    let locationList = [];

    submitBtn.addEventListener("click", function() {
        newLocation = Location(address);
        locationList.push(newLocation);
    });

}