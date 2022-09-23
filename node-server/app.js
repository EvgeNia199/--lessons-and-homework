const express = require("express");
const app = express();

app.use("/", express.static("public"));
app.use("/user", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname));
});

module.exports = app;
