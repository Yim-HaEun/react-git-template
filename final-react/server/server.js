const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const PORT = 5006;

app.use(cors());

const dbconfig = {
  user: 'khbank',
  password: 'khbank',
  connectString: 'localhost:1521/XE',
};

app.use(express.json());

async function selectQuery(sql) {
  let connection;

  try {
    //db와 연결하기
    connection = await oracledb.getConnection(dbconfig);
    const result = await connection.execute(sql);

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
        console.error(err);
      }
    }
  }
}
//연결 잘 됐는지 확인해주기
app.listen(PORT, () => {
  console.log(`서버시작 : http://localhost:${PORT}`);
});
app.get('/api/cafe', async (request, response) => {
  const cafe = await selectQuery('SELECT * FROM cafe');
  response.json(cafe);
});
