import express, { urlencoded } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "contact.html"));
});

app.get("/countdown", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "countdown.html"));
});

app.get("/memories", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "memories.html"));
});

app.get("/sustain", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "sustain.html"));
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
