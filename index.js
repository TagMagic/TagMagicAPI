const express = require('express');
const app = express();

// Allow JSON body input
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
    res.json({
        status: "TagMagicAPI is running",
        message: "Welcome to the TagMagic metadata API"
    });
});

// Example metadata processing route
app.post('/process', (req, res) => {
    const { title, artist, album } = req.body;

    // Simple example processing
    const result = {
        original: { title, artist, album },
        processed: {
            title: title ? title.trim() : null,
            artist: artist ? artist.trim() : null,
            album: album ? album.trim() : null
        }
    };

    res.json(result);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`TagMagicAPI running on port ${PORT}`);
});
