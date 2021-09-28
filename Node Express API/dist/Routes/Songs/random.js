exports.getRandomSongsAndArtists = (req, res, next) => {
    const limit = req.params.limit || 5;
    const query = `SELECT * FROM Songs LEFT JOIN Artists ON Songs.Artists_id = Artists.id ORDER BY RAND() LIMIT ${limit}`;
    req.connection.query(query, (error, rows) => {
        if (error)
            return res.status(400).json({ error });
        const result = rows.length > 0 ? rows : "Song Not Found In Libary";
        res.status(200).send({ result });
    });
    next();
};
//# sourceMappingURL=random.js.map