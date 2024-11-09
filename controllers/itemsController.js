import db from "../config/db.js";

// Get all items from the database
export const getAllItems = (req, res) => {
    const query = "SELECT * FROM items";
    db.query(query, (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).send("Error fetching items");
        }
        res.json(results);
    });
};

// Create a new item in the database
export const createItem = (req, res) => {
    const { name, description } = req.body;
    const query = "INSERT INTO items (name, description) VALUES (?, ?)";
    db.query(query, [name, description], (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).send("Error creating item");
        }
        res.status(201).send(`Item added with ID: ${results.insertId}`);
    });
};

// Update an existing item
export const updateItem = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const query = "UPDATE items SET name = ?, description = ? WHERE id = ?";
    db.query(query, [name, description, id], (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).send("Error updating item");
        }
        res.send("Item updated successfully");
    });
};

// Delete an item by ID
export const deleteItem = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM items WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).send("Error deleting item");
        }
        res.send("Item deleted successfully");
    });
};
