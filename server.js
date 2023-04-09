const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
  res.send({massage: 'Hello Express!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));