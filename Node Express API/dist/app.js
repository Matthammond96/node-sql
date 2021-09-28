const { createConnection, endConnection } = require('./Routes/MySQL/connection');
const { getArtistByID, getArtistByName, getRandomSongsByArtistName } = require('./Routes/Artist/artist');
const { getSongByID, getSongByTitle, updateSongTitleByID, deleteSongByID } = require('./Routes/Song/song');
const { getRandomSongsAndArtists } = require('./Routes/Songs/random');
const express = require('express'), app = express(), port = process.env.PORT || 8080;
// Middleware
app.use(express.json());
app.use(createConnection);
// Artist Routes
app.get("/artist/:artistID", getArtistByID);
app.get("/artist/title/:artistName", getArtistByName);
// Song Routes
app.get("/song/:songID", getSongByID);
app.get("/song/title/:songTitle", getSongByTitle);
app.put("/song/update/:songID", updateSongTitleByID);
app.delete("/song/delete/:songID", deleteSongByID);
// Songs Routes
app.get("/songs/random/:limit?", getRandomSongsAndArtists);
app.use(endConnection);
app.listen(port, () => {
    console.log(`Listneing on port: ${port}`);
});
//# sourceMappingURL=app.js.map