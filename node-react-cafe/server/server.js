const oracledb = require('oracledb');
const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
const PORT = 5003;

const dbConfig = {
  user: 'khbank',
  password: 'khbank',
  connectString: 'localhost:1521/XE',
};

async function runQuery(sql, binds = [], options = {}) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql, binds, options);
    return result.rows.map((row) => ({
      ID: row[0],
      NAME: row[1],
      PRICE: row[2],
    }));
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        close.error(err);
      }
    }
  }
}
app.get('/', (request, response) => {
  response.send('백엔드 연결했습니다.');
});

app.get('/api/cafes', async (request, response) => {
  const cafes = await runQuery('SELECT *FROM cafe');
  response.json(cafes);
});

app.listen(PORT, () => {
  console.log(`서버 시작 : http:localhost:${PORT}`);
});
