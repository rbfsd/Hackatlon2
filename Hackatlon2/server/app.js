const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// bodyParser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "../public/index.html");
  res.sendFile(indexPath);
});

app.post("/contact", (req, res) => {
  // Traite les données du formulaire ici...
  console.log(req.body);
  res.send("Formulaire envoyé avec succès!");
});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
