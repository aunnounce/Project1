const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let id = 5;
const userList = [
  {
    "title": "Apple",
    "body": "사과",
    "createAt": 1682486039929,
    "id": 1
  },
  {
    "title": "Orange",
    "body": "오렌지",
    "createAt": 1682486047085,
    "id": 2
  },
  {
    "title": "Banana",
    "body": "바나나",
    "createAt": 1682486056769,
    "id": 3
  },
  {
    "title": "Puppy",
    "body": "개는 중형 동물이자 가장 널리 분포하며 개체 수가 가장 많은 지상 동물 중 하나이며 가축화한 회색늑대이다. 개는 인류가 최초로 가축으로 삼은 동물로 알려져 있으며, 역사적으로 반려견, 사냥견으로서 길러 왔다. 위키백과",
    "createAt": 1682488585437,
    "id": 4
  }
];

app.get('/api/userData', (req, res) => {
  res.json(userList);
});

app.get('/api/userData/:id', (req, res) => {
  const id = req.params.id;
  const user = userList.find(user => user.id === parseInt(id));
    if(user) {
      res.json(user);
    } else {
      res.send('유저 정보를 찾을수 없습니다.');
    }
})

app.post('/api/userData', (req, res) => {
  const { title, body } = req.body;
  userList.push({
    id: id++,
    title,
    body,
    createAt: Date.now()
  })
  res.send('success');
})

app.delete('/api/userData/:id', (req, res) => {
  const userId = userList.filter(list => {
    return list.id !== req.params.id;
  })
  res.json(userId);
})

app.listen(port, () => console.log(`Listening on port ${port}`));