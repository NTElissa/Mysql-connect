
import db from "../config/db.js";

export const getAllItems = (req, res) => {
    const query = "SELECT * FROM items";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching data:", err.stack);
            res.status(500).send("Error fetching data");
            return;
        }
        res.json(results);
    });
};

export const createItem = (req, res) => {
    const { name, description } = req.body;
    const query = "INSERT INTO items (name, description) VALUES (?, ?)";
    db.query(query, [name, description], (err, results) => {
        if (err) {
            console.error("Error inserting data:", err.stack);
            res.status(500).send("Error inserting data");
            return;
        }
        res.status(201).send(`Item added with ID: ${results.insertId}`);
    });
};

export const updateItem = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const query = "UPDATE items SET name = ?, description = ? WHERE id = ?";
    db.query(query, [name, description, id], (err, results) => {
        if (err) {
            console.error("Error updating data:", err.stack);
            res.status(500).send("Error updating data");
            return;
        }
        res.send("Item updated successfully");
    });
};

export const deleteItem = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM items WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error deleting data:", err.stack);
            res.status(500).send("Error deleting data");
            return;
        }
        res.send("Item deleted successfully");
    });
};
