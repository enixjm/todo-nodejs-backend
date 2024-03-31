"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { POSTGRE_USER, POSTGRE_HOST, POSTGRE_DATABASE, POSTGRE_PASSWORD, POSTGRE_PORT } = process.env;
const pg_1 = require("pg");
if (!POSTGRE_USER || !POSTGRE_HOST || !POSTGRE_DATABASE || !POSTGRE_PASSWORD || !POSTGRE_PORT) {
    throw new Error("환경 변수가 올바르게 설정되지 않았습니다." + POSTGRE_USER + POSTGRE_HOST + POSTGRE_DATABASE + POSTGRE_PASSWORD + POSTGRE_PORT);
}
const client = new pg_1.Client({
    user: POSTGRE_USER,
    host: POSTGRE_HOST,
    database: POSTGRE_DATABASE,
    password: POSTGRE_PASSWORD,
    port: parseInt(POSTGRE_PORT),
    ssl: {
        rejectUnauthorized: false
    }
});
client.connect();
exports.default = client;
