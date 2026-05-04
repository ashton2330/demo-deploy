const express = require('express'); 
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Toyota Corolla' },
    { id: 2, name: 'Honda Civic' },
    { id: 3, name: 'Ford Mustang' }
  ]);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});