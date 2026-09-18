import express from "express";
import {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
} from "../controllers/newsController.js";
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/createNews", authMiddleware, createNews);
router.get("/getAllNews", authMiddleware, getAllNews);
router.get("/getNewsById/:id", authMiddleware, getNewsById);
router.put("/updateNews/:id", authMiddleware, updateNews);
router.delete("/deleteNews/:id", authMiddleware, deleteNews);

export default router;