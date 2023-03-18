const express = require("express");
const app = express();
const port = 8080;

//initial route
app.get("/", (_req, res) => {
  res.send("Ey muy buenas a todos guapisimos y guapisimas");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
