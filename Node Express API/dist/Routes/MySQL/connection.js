var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mysql = require('mysql');
exports.createConnection = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'qwerty',
        password: 'qwerty',
        database: 'qwerty'
    });
    connection.connect();
    req.connection = connection;
    next();
});
exports.endConnection = (req, res, next) => {
    req.connection.end();
    req.connection = null;
};
//# sourceMappingURL=connection.js.map