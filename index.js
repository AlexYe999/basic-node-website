const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/pages/index.html"));
app.get("/about", (req, res) => res.sendFile(__dirname + "/pages/about.html"));
app.get("/contact-me", (req, res) =>
  res.sendFile(__dirname + "/pages/contact-me.html")
);
app.all("*", (req, res) => res.sendFile(__dirname + "/pages/404.html"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
