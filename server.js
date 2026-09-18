import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/auth", authRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "NewsFlow API is running",
  });
});

// Error Middleware
app.use(errorMiddleware);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});