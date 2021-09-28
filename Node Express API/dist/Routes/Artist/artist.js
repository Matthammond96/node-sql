var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports.getArtistByID = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const requestedArtistNameID = req.params.artistID;
    const query = `SELECT * FROM Artists WHERE id = ${requestedArtistNameID}`;
    req.connection.query(query, (error, rows) => {
        if (error)
            return res.status(400).json({ error });
        const result = rows.length > 0 ? rows[0] : "Artists Not Found In Libary";
        res.status(200).send({ result });
    });
    next();
});
exports.getArtistByName = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const requestedArtistName = req.params.artistName;
    const query = `SELECT * FROM Artists WHERE artistName = ${requestedArtistName}`;
    req.connection.query(query, (error, rows) => {
        if (error)
            return res.status(400).json({ error });
        const result = rows.length > 0 ? rows[0] : "Artists Not Found In Libary";
        res.status(200).send({ result });
    });
    next();
});
//# sourceMappingURL=artist.js.map