// Recording restroom or FHP or both

let addRestroom = false;
let addFHP = false;

let nodeType = Document.querySelectorAll(".node-btn");

for (let i = 0; i < nodeType.length; i++) {
    nodeType[i].addEventListener("click", function () {
        nodeType[i].classList.toggle("active");
    });
} 

if (nodeType[0].classList.contains("active")) {
    addRestroom = true;
}

if (nodeType[1].classList.contains("active")) {
    addFHP = true;
}

// Recording address input

let submitBtn = Document.querySelector("#submit");
let addressField = Document.querySelector("#address");
let userPosnField = Document.querySelector("#user-location");
let address;

addressField.addEventListener("click", function () {
    address = addressField.textContent;
    address = tempAddress + 0// !!! TODO: CALL API HERE TO INTERPRET LAT+LONG OF ADDRESS
});

userPosnField.addEventListener("click", function () {
    address = 0;// !!! TODO: CALL API HERE TO DETERMINE USER LOCATION (LAT+LONG)
});

function Location() {
    this.latitude = address+0; //!!!!!get latitude of address
    this.longitude = address+0; //!!get long of address
}

submitBtn.addEventListener("click", function () {
    // window[]
});


