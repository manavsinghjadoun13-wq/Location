const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`[ALERT] Received location update -> Latitude: ${latitude}, Longitude: ${longitude}`);
    console.log(`Google Maps Link: https://google.com{latitude},${longitude}`);
    res.status(200).json({ message: 'Location data logged successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
