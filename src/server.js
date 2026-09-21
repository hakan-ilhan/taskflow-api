require("dotenv").config();
const express = require("express");
const logger = require("./middlewares/logger");
const taskRoutes = require("./routes/taskRoutes");

const app = express();


const PORT = parseInt(process.env.PORT, 10) || 3000;

app.use(express.json());
app.use(logger);

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("TaskFlow API Servisi Calisiyor.");
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde aktif.`);
});