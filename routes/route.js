const express = require("express");
const mainRouter = express.Router();
const path = require("path");
//html routes
mainRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});
mainRouter.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/pages/about.html"));
});
mainRouter.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/pages/contact.html"));
});

module.exports = { mainRouter };
