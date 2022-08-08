const express = require('express');
const mongoose = require('mongoose');
const Router = require("./routes");

const app = express();

app.use(express.json());

const username = "Suraj5612";
const password = "Suraj@1234";
const cluster = "cluster0";
const dbname = "EMS";

mongoose.connect(
  `mongodb+srv://${`Suraj5612`}:${`Suraj@1234`}@${`cluster0`}.mongodb.net/${`EMS`}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
