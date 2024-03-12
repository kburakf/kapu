const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const connectDB = require('./app/database/connect');

async function application() {
  let server;
  const port = 3000;

  try {
    await connectDB();

    app.use(bodyParser.json());

    require('./app/routers/routeManager')(app);

    server = app.listen(port);

    console.log(`Application is running on: ${port}`);
  } catch (error) {
    // server.close();
    console.log(`Server is not running: ${error}`);
  }
}

application();
