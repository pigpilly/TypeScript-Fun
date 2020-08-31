"use strict";
const API_KEY = "357a0bf39507478d836daea72eef726c";
window.addEventListener("load", () => {
    let long, lat;
    let tempDescription = document.querySelector(".temperature-description");
    let tempDegree = document.querySelector(".temperature-degree");
    let timezone = document.querySelector(".location-timezone");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
            fetch(api)
                .then((response) => {
                return response.json();
            })
                .then((data) => {
                console.log(data);
                tempDegree.textContent = (data.main.temp - 273.16)
                    .toFixed(2)
                    .toString();
                tempDescription.textContent = data.weather[0].description;
                timezone.textContent = data.name;
                setIcons(data.weather[0].main, document.querySelector(".icon"));
            });
        });
    }
    function setIcons(icon, iconID) {
        //Don't know yet how to Import an external JS file into TS
        //TODO: to be fixed later
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/ /g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});
//# sourceMappingURL=weatherApp.js.map
