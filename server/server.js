const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const { sequelize } = require('./models');
const routes = require('./routes/routes');
// const sessions = require('express-session');
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// app.use(
//   sessions({
//     secret: 'aa',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       httpOnly: true,
//       sameSite: true,
//       maxAge: 1000 * 60 * 60,
//     },
//   })
// );
// console.log(sessions.Cookie());

app.use('/', routes);
app.listen(3001, async () => {
  await sequelize.authenticate();
  console.log('Server running on 3001');
});
