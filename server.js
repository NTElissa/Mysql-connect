// server.js
import express from "express";
import itemRoutes from "./routes/items.js";

const app = express();
const PORT = 3001;

app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/items", itemRoutes); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
