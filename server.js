// server.js
  
import express from "express";


const app = express();
const PORT = 3001


app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});