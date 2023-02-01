const express = require("express"),
  http = require("http");

const hostname = "localhost";
const port = process.env.PORT || 5000;

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
// const low = require("lowdb");

const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();

 app.use(bodyParser.json());

//  const FileSync = require("lowdb/adapters/FileSync");

//  const adapter = new FileSync("db.json");
//  const db = low(adapter);
 
//  db.defaults({ books: [] }).write();

 const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API"
    },
    servers: [
      {
        url: "https://localhost:5000"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
// app.db = db;
app.use(cors());
app.use(morgan("dev"));
 const dishRouter = require("./routes/dishRouter");
const nationRouter = require("./routes/nationRouter");
const playerRouter = require("./routes/playerRouter");

app.use("/dishes", dishRouter);
app.use("/nations", nationRouter);
app.use("/players", playerRouter);


//connect to db using mongoose
const db1 = require('./config/db');
//connect to db
db1.connect();

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
