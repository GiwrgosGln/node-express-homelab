const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express in a homelab!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
