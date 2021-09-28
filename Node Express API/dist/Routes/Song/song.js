var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports.getSongByID = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const requestedSongID = req.params.songID;
    const query = `SELECT * FROM Songs WHERE id = ${requestedSongID}`;
    req.connection.query(query, (error, rows) => {
        if (error)
            return res.status(400).json({ error });
        const result = rows.length > 0 ? rows[0] : "Song Not Found In Libary";
        res.status(200).send({ result });
    });
    next();
});
exports.getSongByTitle = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const requestedSongTitle = req.params.songTitle;
    const query = `SELECT * FROM Songs WHERE songTitle = ${requestedSongTitle}`;
    req.connection.query(query, (error, rows) => {
        if (error)
            return res.status(400).json({ error });
        const result = rows.length > 0 ? rows[0] : "Song Not Found In Libary";
        res.status(200).send({ result });
    });
    next();
});
exports.updateSongTitleByID = (req, res, next) => {
    const songID = req.params.songID;
    const requestData = req.body;
    const querySetString = Object.keys(requestData).map(key => key + ' = ' + requestData[key]).join(', ');
    const query = `UPDATE Songs SET ${querySetString} WHERE id = ${songID}`;
    console.log(query);
    req.connection.query(query, (error, rows) => {
        if (error)
            return res.status(400).json({ error });
        console.log(rows);
        res.status(200).send({ result: rows });
    });
    next();
};
exports.deleteSongByID = (req, res, next) => {
    const songID = req.params.songID;
    const query = `DELETE FROM Songs WHERE id = ${songID}`;
    req.connection.query(query, (error, rows) => {
        if (error)
            return res.status(400).json({ error });
        const afftectedRows = rows.affectedRows;
        res.status(200).send({ result: `Succesfully deleted ${afftectedRows} rows` });
    });
    next();
};
//# sourceMappingURL=song.js.map