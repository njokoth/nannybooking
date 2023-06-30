const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'njokoth',
  password: 'thisisforresearch',
  host: 'localhost',
  port: 5432,
  database: 'sloanesbabysitting'
});

// Middleware
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { date, startTime, endTime } = req.body;

  // Insert form data into the database
  const query = 'INSERT INTO availability (date, start_time, end_time) VALUES ($1, $2, $3)';
  const values = [date, startTime, endTime];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    } else {
      console.log('Form data inserted successfully');
      res.status(200).json({ message: 'Form data inserted successfully' });
    }
  });
});

// Route to fetch availability data
app.get('/availability', (req, res) => {
    // Retrieve availability data from the database
    const query = 'SELECT * FROM availability';
    pool.query(query, (error, result) => {
      if (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
      } else {
        const availabilityData = result.rows;
        res.json(availabilityData);
      }
    });
  });

  // Route to handle booking
app.post('/book/:id', (req, res) => {
    const availabilityId = req.params.id;
  
    // Update the booked status for the availability entry in the database
    const query = 'UPDATE availability SET booked = TRUE WHERE id = $1';
    const values = [availabilityId];
  
    pool.query(query, values, (error, result) => {
      if (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
      } else {
        console.log('Availability booked successfully');
        res.status(200).json({ message: 'Availability booked successfully' });
      }
    });
  });
  

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
