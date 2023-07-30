const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const { sequelize } = require('./models');
const routes = require('./routes/routes');

app.use('/', routes);
app.listen(3001, async () => {
  await sequelize.authenticate();
  console.log('Server running on 3001');
});
