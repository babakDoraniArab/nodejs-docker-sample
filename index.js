const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req, res) => {
    console.log('req ');
})
app.listen(port, () => console.log(`we are listening on port ${port}`));
