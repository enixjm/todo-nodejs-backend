import dotenv from 'dotenv';
dotenv.config();
const { POSTGRE_USER, POSTGRE_HOST, POSTGRE_DATABASE, POSTGRE_PASSWORD, POSTGRE_PORT } = process.env;

import { Client } from 'pg';

if (!POSTGRE_USER || !POSTGRE_HOST || !POSTGRE_DATABASE || !POSTGRE_PASSWORD || !POSTGRE_PORT) {
    throw new Error("환경 변수가 올바르게 설정되지 않았습니다."+POSTGRE_USER+POSTGRE_HOST+ POSTGRE_DATABASE+ POSTGRE_PASSWORD+ POSTGRE_PORT);
}
const client = new Client({
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

export default client;