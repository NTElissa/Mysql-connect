// routes/items.js
import express from "express";
import { getAllItems, createItem, updateItem, deleteItem } from "../controllers/itemsController.js";

const router = express.Router();

router.get("/", getAllItems);             
router.post("/", createItem);              
router.put("/:id", updateItem);           
router.delete("/:id", deleteItem);         

export default router;
