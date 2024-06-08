// Sample SIMD data
const simdData = [
    { latitude: 55.9533, longitude: -3.1883, simd_rank: 10, description: 'Location 1' },
    { latitude: 55.8642, longitude: -4.2518, simd_rank: 20, description: 'Location 2' },
    { latitude: 56.4907, longitude: -4.2026, simd_rank: 30, description: 'Location 3' },
];

// Sample Train Station data
const trainStations = [
    { latitude: 55.9533, longitude: -3.1883, name: 'Edinburgh Waverley' },
    { latitude: 55.8609, longitude: -4.2514, name: 'Glasgow Central' },
    { latitude: 56.4620, longitude: -2.9707, name: 'Dundee' },
];

// Sample Job Data
const jobData = [
    { latitude: 55.9533, longitude: -3.1883, job_title: 'Software Engineer', company: 'Tech Corp' },
    { latitude: 55.8642, longitude: -4.2518, job_title: 'Data Analyst', company: 'Data Inc' },
];

// Sample School Data
const schoolData = [
    { latitude: 55.9533, longitude: -3.1883, school_name: 'Edinburgh High', rating: 8 },
    { latitude: 55.8642, longitude: -4.2518, school_name: 'Glasgow Elementary', rating: 7 },
];

function initMap() {
    const scotland = { lat: 56.4907, lng: -4.2026 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: scotland,
    });

    // Add SIMD data as markers on the map
    simdData.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.latitude, lng: location.longitude },
            map: map,
            title: `SIMD Rank: ${location.simd_rank}`
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>SIMD Rank: ${location.simd_rank}</h3><p>${location.description}</p>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });

    // Add train stations and circles
    trainStations.forEach(station => {
        const marker = new google.maps.Marker({
            position: { lat: station.latitude, lng: station.longitude },
            map: map,
            title: station.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/train.png'
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${station.name}</h3>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });

        // Draw a circle representing a ten-minute walking distance (800 meters)
        const circle = new google.maps.Circle({
            map: map,
            radius: 800,
            fillColor: '#FF0000',
            fillOpacity: 0.2,
            strokeColor: '#FF0000',
            strokeOpacity: 0.5,
            strokeWeight: 1,
            center: { lat: station.latitude, lng: station.longitude }
        });
    });

    // Add jobsite data as markers on the map
    jobData.forEach(job => {
        const marker = new google.maps.Marker({
            position: { lat: job.latitude, lng: job.longitude },
            map: map,
            title: job.job_title,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${job.job_title}</h3><p>${job.company}</p>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });

    // Add school data as markers on the map
    schoolData.forEach(school => {
        const marker = new google.maps.Marker({
            position: { lat: school.latitude, lng: school.longitude },
            map: map,
            title: school.school_name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${school.school_name}</h3><p>Rating: ${school.rating}</p>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

// Load the map after the page has finished loading
window.onload = initMap;
