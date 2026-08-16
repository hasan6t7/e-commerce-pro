import express from "express";

const app = express();

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend API running smoothly!",
    timestamp: new Date().toISOString(),
  });
});

export default app;
