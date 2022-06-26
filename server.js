const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection.js');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
