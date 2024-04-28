/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/
document.addEventListener('DOMContentLoaded', function() {
    // Maak de kaart aan en stel het centrum en zoomniveau in
    var map = L.map('apMap').setView([51.23009, 4.41616], 17);

    // Voeg OpenStreetMap tegels toe
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    // Voeg een marker toe op de gegeven locatie
    var marker = L.marker([51.23009, 4.41616]).addTo(map);
    marker.bindPopup('<b>AP-Hogeschool</b><br>Ellermanstraat 33').openPopup();

    // Definieer de grenzen van de rechthoek en voeg deze toe aan de kaart
    var bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
    var rectangle = L.rectangle(bounds, {color: "#FF0000", weight: 1}).addTo(map);
    rectangle.bindPopup('Campus Ellerman');
});



// bepaal de rechthoek rondom het gebouw van AP

// kleur de rechthoek in met de rode AP-kleur

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
