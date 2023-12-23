const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { mainRouter } = require("./routes/route");
//middlewere
require("dotenv").config();
app.use(cors());
app.use(express.static(__dirname + "/views/public/"));
//routes
app.get("/*", mainRouter);
app.use((req, res) => {
  res.send("<h1>404 page not found</h1>");
});

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
