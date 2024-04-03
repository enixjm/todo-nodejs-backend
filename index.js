"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { POSTGRE_USER, POSTGRE_HOST, POSTGRE_DATABASE, POSTGRE_PASSWORD, POSTGRE_PORT } = process.env;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routs = require('./router/routs');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api', routs);
app.use('/api', express_1.default.static(__dirname + '/doc'));
app.listen(POSTGRE_PORT, () => {
    console.log(__dirname);
    console.log(`Example app listening at ${POSTGRE_HOST}:${POSTGRE_PORT}`);
});
