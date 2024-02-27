const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { db } = require("../config/dbonfig");

const app = express();
const port = 3000;

// bodyParser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   const indexPath = path.join(__dirname, "../public/index.html");
//   res.sendFile(indexPath);
// });

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.get("/about", (req, res) => {
  const indexPath = path.join(__dirname, "../public/about.html");
  res.sendFile(indexPath);
});

app.get("/memories", (req, res) => {
  const indexPath = path.join(__dirname, "../public/memories.html");
  res.sendFile(indexPath);
});

app.get("/performSearch", async (req, res) => {
  const searchTerm = req.query.name;

  try {
    const results = await db("abducted_persons")
      .where("name", "ilike", `%${searchTerm}%`)
      .select(
        "id",
        "name",
        "age",
        "city",
        "abducted_date",
        "status",
        "death_date",
        "body_location",
        "family_notification_date"
      );

    res.json(results);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/contact", (req, res) => {
  const indexPath = path.join(__dirname, "../public/contact.html");
  res.sendFile(indexPath);
});

app.get("/sustain", (req, res) => {
  const indexPath = path.join(__dirname, "../public/sustain.html");
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
