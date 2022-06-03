const express = require('express');

const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'the server is working ' });
});

app.listen(port, () => {
  console.log('the server is running on the port', port);
});
