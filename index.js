const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  req.send("<h2>Hi test</h2>");
});
app.listen(port, () => console.log(`we are listening on port ${port}`));
