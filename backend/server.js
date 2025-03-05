const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
    host: 'localhost',      // MySQL host
    user: 'root',           // MySQL username
    password: '1234', // MySQL password
    database: 'gui'      // Name of your database
});
connection.connect((err) => {
  if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Define a schema and model
// const ItemSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
// });

// const Item = mongoose.model('Item', ItemSchema);

// API routes
app.get('/items', async (req, res) => {
  try {
    const { type_of_sport } = req.query; // Retrieve the query parameter
    
    console.log('GET /items with type_of_sport:', type_of_sport);
    
    let query = 'SELECT * FROM item'; // Base query
    
    if (type_of_sport) {
      query += ' WHERE type_of_sport = ?'; // Add condition if type_of_sport is provided
    }
    
    connection.query(query, [type_of_sport], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
        return;
      }
      res.json(results); // Return the filtered results
      console.log('Items:', results);
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// app.get("/cart", (req, res) => {
//   const sql = "SELECT * FROM cart";
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.log("ERROR IN CART");
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// });
// app.get('/cart', async (req, res) => {
//   try {
//     console.log('GET /cart request received');

//     const query = 'SELECT * FROM cart'; // Fetch all cart items

//     connection.query(query, (err, results) => {
//       if (err) {
//         console.error('Database query error:', err);
//         res.status(500).json({ error: 'Database query failed' });
//         return;
//       }
//       res.json(results); // Send cart data
//       console.log('Cart Items:', results);
//     });
//   } catch (error) {
//     console.error('Unexpected error:', error);
//     res.status(500).json({ error: 'Unexpected server error' });
//   }
// });
app.get('/cart', (req, res) => {
  const query = 'SELECT * FROM cart'; // Fetch all items from the cart table

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    res.json(results); // Send retrieved cart data as JSON
  });
});

app.use(express.json()); // ✅ Ensures JSON parsing

app.post("/cart", (req, res) => {
    console.log("Received request body:", req.body); // ✅ Debugging line

    const { product_name, price, quantity, image_url } = req.body;

    if (!product_name || !price || !quantity || !image_url) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const query = "INSERT INTO cart (product_name, price, quantity, image_url) VALUES (?, ?, ?, ?)";
    connection.query(query, [product_name, price, quantity, image_url], (err, results) => {
        if (err) {
            console.error("Database insert error:", err);
            return res.status(500).json({ error: "Database insert failed" });
        }

        res.status(201).json({ message: "Item added to cart", itemId: results.insertId });
    });
});

app.post("/submit-feedback", (req, res) => {
  const { full_name, phone_number, email_address, satisfaction_rating, feedback_reason, preferred_task_method } = req.body;

  if (!full_name || !phone_number || !email_address || !satisfaction_rating) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sql = 
    "INSERT INTO feedback (full_name, phone_number, email_address, satisfaction_rating, feedback_reason, preferred_task_method) VALUES (?, ?, ?, ?, ?, ?)";

  connection.query(sql, [full_name, phone_number, email_address, satisfaction_rating, feedback_reason, preferred_task_method], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error", details: err });
    }
    res.status(200).json({ message: "Feedback submitted successfully",itemId: result.insertId });

  });
});
app.delete('/cart/:id', (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM cart WHERE id = ?";
  connection.query(query, [id], (err, result) => {
      if (err) {
          console.error("Database delete error:", err);
          return res.status(500).json({ error: "Database delete failed" });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ error: "Item not found" });
      }

      res.json({ message: "Item removed from cart" });
  });
});


app.use('/uploads', express.static('uploads'));


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


