const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/userData', (req, res) => {
  res.send([
    {
      "title": "Apple",
      "body": "사과",
      "id": 1
    },
    {
      "title": "Orange",
      "body": "오렌지",
      "id": 2
    },
    {
      "title": "Banana",
      "body": "바나나",
      "id": 3
    },
    {
      "title": "Puppy",
      "body": "개는 중형 동물이자 가장 널리 분포하며 개체 수가 가장 많은 지상 동물 중 하나이며 가축화한 회색늑대이다. 개는 인류가 최초로 가축으로 삼은 동물로 알려져 있으며, 역사적으로 반려견, 사냥견으로서 길러 왔다. 위키백과",
      "id": 4
    }
  ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));