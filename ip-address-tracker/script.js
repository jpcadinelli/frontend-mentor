// IP Tracker
const api_key = 'at_DtjIMJ8f7iCsC2GlBYIJFdAyWrZ6V';
const input = document.querySelector('#id')
const inputBtn = document.querySelector('#inputBtn')
const respIp = document.querySelector('#resp-ip')
const respLocation = document.querySelector('#resp-location')
const respTimezone = document.querySelector('#resp-timezone')
const respIsp = document.querySelector('#resp-isp')

inputBtn.addEventListener('click', () => {
    if (input.value === '') {
        alert('Insira o IP.')
    } else {
        var ip = input.value
        fetch(`https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ip}`)
            .then((response) => response.json())
            .then((data) => {
              let timezone = data.location.timezone;
              respIp.innerHTML = `${data.ip}`;
              respTimezone.innerHTML = `UTC ${timezone}`
              respLocation.innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
              respIsp.innerHTML = `${data.isp}`;
              let long = data.location.lng
              let lati = data.location.lat
              // Map
              var map = L.map('map').setView([lati, long], 13);
              
              L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }).addTo(map);
              
              L.marker([lati, long]).addTo(map)
                  .bindPopup("IP's location.")
                  .openPopup();
        })
    }
})

