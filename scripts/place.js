
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedSpan.textContent = document.lastModified;



const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windspeed").textContent);
const windChillSpan = document.getElementById("windchill");



function calculateWindChill(temp, speed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}


if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillSpan.textContent = `${windChill} °C`;
} else {
    windChillSpan.textContent = "N/A";
}
