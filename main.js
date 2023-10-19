const express = require("express");
const app = express();

function connectServer() {
  app.get(() => {
    let res
    res.send("connection created");
  });
  app.listen((port = 3000), () => {
    console.log(`server running on : ${port}`);
  });
}

connectServer();
