const express = require('express');
const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 君のSuperGrokキー全部ここに入れる',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'proxy error' });
  }
});

app.listen(process.env.PORT || 3000);
