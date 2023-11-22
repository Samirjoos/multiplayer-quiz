import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./src/routes/authRoutes.js";

// Lädt Umgebungsvariablen aus einer .env-Datei in process.env
dotenv.config();

// Setzt den Port für den Server aus der Umgebungsvariable oder verwendet einen Fallback-Wert
const PORT = process.env.PORT || process.env.API_PORT;

// Initialisiert eine neue Express-Anwendung
const app = express();

// Middleware für das Parsen von JSON-Anfragen
app.use(express.json());

/**
 * CORS (Cross-Origin Resource Sharing) ist eine Middleware in Express, die es ermöglicht,
 * dass Ressourcen einer Express-Anwendung von einer anderen Domain aus angefordert werden können.
 * Dies ist nützlich für die API-Interaktion zwischen verschiedenen Domains, wobei
 * Sicherheitsregeln definiert werden können, um zu kontrollieren, welche Domains, Methoden und Header
 * zugelassen sind. Ohne CORS würden solche Anfragen von Browser-Sicherheitsrichtlinien blockiert.
 */
app.use(cors());

// Definiert eine GET-Route für die Root-URL, die eine einfache Nachricht zurückgibt
app.get("/", (req, res) => {
  return res.send("Hello here is your server");
});

app.use("/api/auth", authRoutes);

// Erstellt einen neuen HTTP-Server mit der Express-Anwendung
const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed. Server not started");
    console.log(err);
  });
