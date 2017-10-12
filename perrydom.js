document.getElementById("plus").addEventListener("click", function(){
fontIncr();
});

function fontIncr() {
let size = window.getComputedStyle(document.body).getPropertyValue('font-size');

size = size.slice(0, -2);
let new_size = parseInt(size) + 1;

document.body.style.fontSize = new_size + 'px';
}
document.getElementById("minus").addEventListener("click", function(){
fontDcr();
});

function fontDcr() {
let size = window.getComputedStyle(document.body).getPropertyValue('font-size');

size = size.slice(0, -2);
let new_size = parseInt(size) - 1;

document.body.style.fontSize = new_size + 'px';
}
function notifyMe() {
    if (!("Notification" in window)) {
        alert("Deze browser accepteert geen notifications");
    }
    else if (Notification.permission === "granted") {
        const notification = new Notification("Poehee wat is dat vies bitter!");
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                const notification = new Notification("Poehee wat is dat vies bitter!");
            }
        });
    }
}
function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

        output.appendChild(img);
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
}