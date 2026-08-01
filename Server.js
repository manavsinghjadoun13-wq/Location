const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Serve the index.html file automatically when opening the site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint that receives the location from the frontend
app.post('/api/location', (req, 'res') => {
    const { latitude, longitude } = req.body;
    
    // Core Logic: This logs coordinates to your server dashboard.
    // You can replace this line to email, text, or save them to a database.
    console.log(`[ALERT] Received location update -> Latitude: ${latitude}, Longitude: ${longitude}`);
    
    // Provide a Google Maps link to the coordinates for quick viewing
    console.log(`Google Maps Link: https://google.com{latitude},${longitude}`);

    res.status(200).json({ message: 'Location data logged successfully on the server.' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
