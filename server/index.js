import cors from "cors";
import express from "express";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteData } from "../src/data/content.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(rootDir, "assets")));

app.get("/api/site", (_request, response) => {
  response.json(siteData);
});

app.get("/api/services", (_request, response) => {
  response.json(siteData.services);
});

app.get("/api/services/:slug", (request, response) => {
  const service = siteData.services.find((item) => item.slug === request.params.slug);

  if (!service) {
    response.status(404).json({ message: "Service not found" });
    return;
  }

  response.json(service);
});

app.get("/api/offers", (_request, response) => {
  response.json(siteData.offers);
});

app.get("/api/projects", (_request, response) => {
  response.json(siteData.projects);
});

app.get("/api/blog", (_request, response) => {
  response.json(siteData.blogPosts);
});

app.get("/api/contact-options", (_request, response) => {
  response.json(siteData.contactOptions);
});

app.post("/api/contact", (request, response) => {
  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    response.status(400).json({ message: "Name, email and message are required." });
    return;
  }

  response.status(202).json({
    message: "Message received. OCTO will follow up shortly."
  });
});

if (existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get("*", (_request, response) => {
    response.sendFile(path.join(distDir, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`OCTO Express API running on http://127.0.0.1:${port}`);
});
