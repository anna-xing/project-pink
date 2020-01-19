window.onload = function () {

    // Recording restroom or FHP or both

    let addRestroom = false;
    let addFHP = false;

    let nodeType = Array.from(document.querySelectorAll(".node-btn"));

    for (let i = 0; i < nodeType.length; i++) {
        nodeType[i].addEventListener("click", function () {
            nodeType[i].classList.toggle("active");
            nodeType[i].classList.toggle("btn-primary");
            nodeType[i].classList.toggle("btn-outline-primary");
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

    addressField.addEventListener("click", function () {
        tempAddress = addressField.textContent;
        address = tempAddress + 0// !!! TODO: CALL API HERE TO INTERPRET LAT+LONG OF ADDRESS
    });

    userPosnField.addEventListener("click", function () {
        address = 0;// !!! TODO: CALL API HERE TO DETERMINE USER LOCATION (LAT+LONG)
    });

    function Location() {
        this.latitude = address + 0; //!!!!!get latitude of address
        this.longitude = address + 0; //!!get long of address
    }

    submitBtn.addEventListener("click", function () {
        // window[]
    });



}